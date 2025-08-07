import { apiURL } from "@/lib/apiURL";

export interface Amount {
  currency: string;
  value: number;
}

export interface Transaction {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  amount: Amount;
  origin: string;
  destination: string;
  transaction_date: string;
}

export interface PaginatedTransactions {
  page: number;
  size: number;
  next: number;
  total_count: number;
  items: Transaction[];
}

export const historyTransactionService = {
  getById: (id: number |  string) => apiURL<PaginatedTransactions>(`accounts/${id}/transactions`),

  create: (data: Omit<PaginatedTransactions, "id">) =>
    apiURL<PaginatedTransactions>("/users", {
      method: "GET",
      body: JSON.stringify(data),
    }),
};