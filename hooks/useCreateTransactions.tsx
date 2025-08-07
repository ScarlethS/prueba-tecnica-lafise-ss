import {
  createTransactionService,
  TransactionDTO,
  TransactionResponse,
} from "@/services/createTransactionService";
import { useState } from "react";

export function useCreateTransaction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transaction, setTransaction] = useState<TransactionResponse | null>(
    null
  );

  const createTransaction = async (data: TransactionDTO) => {
    setLoading(true);
    setError(null);

    try {
      const response = await createTransactionService.create(data);
      setTransaction(response);
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message ?? "Error al crear la transacción");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createTransaction, transaction, loading, error };
}
