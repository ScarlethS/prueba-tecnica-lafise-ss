import { apiURL } from "@/lib/apiURL";

interface Product {
  type: string;
  id: string | number; 
}

export interface User {
  full_name: string;
  profile_photo: string;
  products?: Product[]; 
}

export const userService = {
  getById: (id: number) => apiURL<User>(`users/${id}`),
  create: (data: Omit<User, "id">) =>
    apiURL<User>("/users", {
      method: "GET",
      body: JSON.stringify(data),
    }),
};
