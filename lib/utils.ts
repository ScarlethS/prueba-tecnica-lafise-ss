import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const getFirstNameAndLastName = (fullName: string = ""): string => {
  const [firstName = "", lastName = ""] = fullName.trim().split(/\s+/);
  return `${firstName} ${lastName}`.trim();
};

