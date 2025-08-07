"use client";
import { ButtonContainer } from "@/components/History/buttonContainer";
import { TableTransaction } from "@/components/History/table";
import { Paper } from "@/components/paper";
import { useHistoryTransactions2 } from "@/hooks/useHistoryTransactions";
import { useUserStore } from "@/store/useStore";
import React, { useMemo } from "react";

const History = () => {
  const user = useUserStore((state) => state.user);
  const accountIds = useMemo(
    () =>
      user?.products?.filter((p) => p.type === "Account").map((p) => p.id) ||
      [],
    [user]
  );

  const { usersTransactions2, loading, error } =
    useHistoryTransactions2(accountIds);

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
  if (error) return <p>Error: {error}</p>;
  return (
    <Paper title="Mis transacciones">
      <ButtonContainer />
      <div className="flex flex-col lg:flex-row mt-5">
        <TableTransaction dataTransactions={usersTransactions2} />
      </div>
    </Paper>
  );
};

export default History;
