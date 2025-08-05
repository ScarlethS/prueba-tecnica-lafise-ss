import { Poppins, Lato } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "800"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
