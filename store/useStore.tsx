// store/useUserStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  type: string;
  id: string | number;
}

interface User {
  full_name: string;
  profile_photo: string;
  products: Product[];
}

interface UserState {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
}
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // clave en localStorage
    }
  )
);
