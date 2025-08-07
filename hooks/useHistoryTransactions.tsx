import { useEffect, useState } from "react";
import {
  historyTransactionService,
  PaginatedTransactions,
} from "@/services/historyService";

export function useHistoryTransactions() {
  const [usersTransactions, setUsersTransactions] =
    useState<PaginatedTransactions>({
      page: 0,
      size: 0,
      next: 0,
      total_count: 0,
      items: [],
    });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    historyTransactionService
      .getById(1134948394)
      .then(setUsersTransactions)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { usersTransactions, loading, error };
}

//se creo useHistoryTransactions2 para poder recibir un array de ids de cuentas
//y obtener las transacciones de todas las cuentas del usuario
export function useHistoryTransactions2(accountIds: (string | number)[]) {
  const [usersTransactions2, setUsersTransactions2] =
    useState<PaginatedTransactions>({
      page: 0,
      size: 0,
      next: 0,
      total_count: 0,
      items: [],
    });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (accountIds.length === 0) return;

    setLoading(true);
    setError(null);

    Promise.all(accountIds.map((id) => historyTransactionService.getById(id)))
      .then((results) => {
        // results es un array de respuestas
        const mergedTransactions = results.flatMap((res) => res.items);

        setUsersTransactions2({
          page: 1,
          size: mergedTransactions.length,
          next: 0,
          total_count: mergedTransactions.length,
          items: mergedTransactions,
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [accountIds]);

  return { usersTransactions2, loading, error };
}
