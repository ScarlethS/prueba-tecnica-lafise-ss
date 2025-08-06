import { AccountCards } from "@/components/Dashboard/accountCards";
import { Container } from "@/components/Dashboard/container";
import { CreditCard } from "@/components/Dashboard/creditCards";
import { TableTransaction } from "@/components/Dashboard/table";
import { Paper } from "@/components/paper";

export default function Home() {
  return (
    <Paper>
      <div className="space-y-5.5 mb-10">
        <Container title="Mis tarjetas">
          <CreditCard
            cardNumber="1234 5678 9012 3456"
            name="John Doe"
            expirationDate="12/25"
            color="bg-secondary"
          />
          <CreditCard
            color="bg-blue-600"
            cardNumber="9876 5432 1098 7654"
            name="Jane Doe"
            expirationDate="11/24"
          />
          <CreditCard
            color="bg-blue-600"
            cardNumber="1234 5678 9012 3456"
            name="John Doe"
            expirationDate="12/25"
          />
        </Container>

        <Container title="Cuentas">
          <AccountCards />
          <AccountCards />
          <AccountCards />
        </Container>
      </div>
      <Container title="Transacciones recientes">
        <TableTransaction />
      </Container>
    </Paper>
  );
}
