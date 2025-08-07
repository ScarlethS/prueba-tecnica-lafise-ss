"use client";
import { AccountCards } from "@/components/Dashboard/accountCards";
import { Container } from "@/components/Dashboard/container";
import { CreditCard } from "@/components/Dashboard/creditCards";
import { TableTransaction } from "@/components/History/table";
import { Paper } from "@/components/paper";
import { useMultipleAccounts } from "@/hooks/useAccounts";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useHistoryTransactions2 } from "@/hooks/useHistoryTransactions";
import { getFirstNameAndLastName } from "@/lib/utils";
import { useUserStore } from "@/store/useStore";
import Link from "next/link";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { users, loading, errorTransactions, errorUsers, usersAccounts } =
    useDashboardData();
  const setUser = useUserStore((state) => state.setUser);
  const nameUser = getFirstNameAndLastName(users && users[0]?.full_name);

  useEffect(() => {
    if (users && users.length > 0) {
      setUser({
        ...users[0],
        products: users[0].products ?? [],
      });
    }
  }, [users, setUser]);

  const accountIds = useMemo(
    () =>
      (users.length > 0 &&
        users[0].products
          ?.filter((p) => p.type === "Account")
          .map((p) => p.id)) ||
      [],
    [users]
  );
  const { usersTransactions2 } = useHistoryTransactions2(accountIds);
  // const { accounts } = useMultipleAccounts(accountIds);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-secondary border-t-transparent"></div>
          <p className="font-semibold text-primary">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <Paper>
      <div className="space-y-5.5 mb-10">
        <Container title="Mis tarjetas">
          <CreditCard
            cardNumber="5325 5678 9012 9033"
            name={nameUser ? nameUser : "userName"}
            expirationDate="12/25"
            color="bg-secondary"
          />
          <CreditCard
            color="bg-[#0b112f]"
            cardNumber="5789 5432 1098 2847"
            name={nameUser ? nameUser : "userName"}
            expirationDate="04/24"
          />
          <CreditCard
            color="bg-[#202020]"
            cardNumber="4809 5678 9012 2234"
            name={nameUser ? nameUser : "userName"}
            expirationDate="09/24"
          />
        </Container>

        <Container title="Cuentas">
          {usersAccounts && <AccountCards dataAccounts={[usersAccounts]} />}
        </Container>
      </div>
      <Container
        title="Transacciones recientes"
        action={
          <Link
            href="/history"
            className="text-sm text-black hover:underline hover:text-primary"
          >
            Ver todas
          </Link>
        }
      >
        <TableTransaction dataTransactions={usersTransactions2} />
      </Container>
    </Paper>
  );
}
