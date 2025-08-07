import { useEffect, useState } from "react";
import { Account, accountServices } from "@/services/userAccountService";

export function useAccounts() {
  const [usersAccounts, setUsersAccounts] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    accountServices
      .getById(1134948394)
      .then((account) => {
        if (Array.isArray(account)) {
          setUsersAccounts(account[0] ?? null);
        } else {
          setUsersAccounts(account);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { usersAccounts, loading, error };
}

// Probando el hook con promise.all para obtener varias cuentas
export function useMultipleAccounts(accountIds: number[]) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (accountIds.length === 0) return;

    setLoading(true);
    setError(null);

    Promise.all(accountIds.map((id) => accountServices.getById(id)))
      .then((results) => {
        setAccounts(results);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [accountIds]);

  return { accounts, loading, error };
}
