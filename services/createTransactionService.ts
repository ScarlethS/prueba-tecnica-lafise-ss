import { apiURL } from "@/lib/apiURL";

export interface TransactionDTO {
  origin: string;
  destination: string;
  amount: {
    currency: string;
    value: number;
  };
}
export interface TransactionResponse {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  amount: {
    currency: string;
    value: number;
  };
  origin: string;
  destination: string;
  transaction_date: string;
}

export const createTransactionService = {
  create: (data: TransactionDTO) =>
    apiURL<TransactionResponse>("/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
};
