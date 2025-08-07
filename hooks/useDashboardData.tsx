// hooks/useDashboardData.ts
import { useUsers } from "./useUsers";
import { useHistoryTransactions } from "./useHistoryTransactions";
import { useAccounts } from "./useAccounts";

export function useDashboardData() {
  const {
    usersTransactions,
    loading: loadingTransactions,
    error: errorTransactions,
  } = useHistoryTransactions();

  const { users, loading: loadingUsers, error: errorUsers } = useUsers();

  const {
    usersAccounts,
    loading: loadingAccounts,
    error: errorAccounts,
  } = useAccounts();

  const loading = loadingTransactions || loadingUsers || loadingAccounts;

  return {
    users,
    usersTransactions,
    usersAccounts,
    loading,
    errorTransactions,
    errorUsers,
    errorAccounts,
  };
}
