import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableTransaction = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Débito USD</TableHead>
          <TableHead>Balance USD</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>14/11/2021</TableCell>
          <TableCell>Walmart </TableCell>
          <TableCell>320.00</TableCell>
          <TableCell>2,100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>14/11/2021</TableCell>
          <TableCell>Walmart </TableCell>
          <TableCell>320.00</TableCell>
          <TableCell>2,100</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
