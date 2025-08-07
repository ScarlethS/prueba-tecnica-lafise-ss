import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaginatedTransactions } from "@/services/historyService";
interface TransactionProps {
  dataTransactions: PaginatedTransactions;
}

import { useState } from "react";

export const TableTransaction = ({ dataTransactions }: TransactionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Ordenar las transacciones por fecha descendente
  const sortedTransactions = dataTransactions?.items
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.transaction_date).getTime() -
        new Date(a.transaction_date).getTime()
    );

  // Calcular el rango de transacciones a mostrar
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = sortedTransactions?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(
    (sortedTransactions?.length || 0) / itemsPerPage
  );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Débito USD</TableHead>
            <TableHead>Número Transacción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions?.map((tx, index) => (
            <TableRow key={index}>
              <TableCell>
                {new Date(tx.transaction_date).toLocaleDateString("es-ES")}
              </TableCell>
              <TableCell>{tx.description || "Sin descripción"}</TableCell>
              <TableCell>
                {tx.amount?.value ? tx.amount.value.toFixed(2) : "—"}
              </TableCell>
              <TableCell>{tx.transaction_number ?? "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Anterior
          </button>
          <span className="px-3 py-1">{`Página ${currentPage} de ${totalPages}`}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Siguiente →
          </button>
        </div>
      )}
    </>
  );
};
