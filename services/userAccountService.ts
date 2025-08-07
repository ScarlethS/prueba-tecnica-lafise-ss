// import { apiURL } from "@/lib/apiURL";

// export interface Account {
//   alias: string;
//   account_number: number;
//   balance: number;
//   currency: string;
// }

// export const accountServices = {
//   getById: (id: number) => apiURL<Account>(`accounts/${id}`),
//   create: (data: Omit<Account, "id">) =>
//     apiURL<Account>("/accounts", {
//       method: "GET",
//       body: JSON.stringify(data),
//     }),
// };

import { apiURL } from "@/lib/apiURL";

export interface Account {
  alias: string;
  account_number: number;
  balance: number;
  currency: string;
}

export const accountServices = {
  // recibe una cuenta o varias (por id)
  getById: async (id: number | number[]) => {
    if (Array.isArray(id)) {
      return Promise.all(
        id.map((accountId) => apiURL<Account>(`accounts/${accountId}`))
      );
    }
    return apiURL<Account>(`accounts/${id}`);
  },

  // recibe un objeto Account o un array de Accounts
  getFromAccounts: async (accounts: Account | Account[]) => {
    if (Array.isArray(accounts)) {
      return Promise.all(
        accounts.map((acc) => apiURL<Account>(`accounts/${acc.account_number}`))
      );
    }
    return apiURL<Account>(`accounts/${accounts.account_number}`);
  },
};



