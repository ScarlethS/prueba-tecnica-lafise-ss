import { AccountCards } from "@/components/Dashboard/accountCards";
import { Container } from "@/components/Dashboard/container";
import { CreditCard } from "@/components/Dashboard/creditCards";
import { TableTransaction } from "@/components/Dashboard/table";
import { Paper } from "@/components/paper";

export default function Home() {
  return (
    <Paper>
      <Container title="Mis tarjetas">
        <CreditCard
          cardNumber="1234 5678 9012 3456"
          name="John Doe"
          expirationDate="12/25"
        />
        <CreditCard
          color="bg-blue-600"
          cardNumber="9876 5432 1098 7654"
          name="Jane Smith"
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
      <Container title="Transacciones recientes">
        <TableTransaction />
      </Container>
    </Paper>
  );
}
