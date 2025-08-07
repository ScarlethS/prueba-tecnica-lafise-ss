import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Copy } from "lucide-react";

interface AccountProps {
  type?: string;
  image?: string;
  account_number?: string | number;
  balance?: number;
  currency?: string;
}

interface AccountCardsProps {
  dataAccounts?: AccountProps | AccountProps[];
}

const flags: Record<string, string> = {
  Nio: "/download.png",
  Usd: "/usd.png",
  Euro: "/euro.png",
};

export const AccountCards = ({ dataAccounts }: AccountCardsProps) => {
  // Asegurar que siempre sea un array
  const accounts = Array.isArray(dataAccounts)
    ? dataAccounts
    : dataAccounts
    ? [dataAccounts]
    : [];
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = async (accountNumber?: string) => {
    if (accountNumber) {
      try {
        await navigator.clipboard.writeText(accountNumber);
        setCopiedAccount(accountNumber);
        setTimeout(() => setCopiedAccount(null), 2000);
      } catch (err) {
        console.error("Error al copiar: ", err);
      }
    }
  };

  return (
    <>
      {accounts.map((account, index) => (
        <Card
          key={index}
          className="w-full max-w-[353.53px] max-h-[150px] rounded shadow-md bg-white flex-shrink-0"
        >
          <CardHeader>
            <CardDescription className="text-xl font-normal text-black">
              {account.type} Cuenta
            </CardDescription>

            <div className="flex items-center gap-2">
              <CardTitle className="text-sm text-primary font-medium tabular-nums @[250px]/card:text-3xl bg-primary-foreground px-2 rounded-l">
                {account.account_number}
              </CardTitle>
              <div className="relative flex items-center">
                <Copy
                  onClick={() => handleCopy(account?.account_number as string)}
                  className="h-5 w-5 text-green-800 cursor-pointer hover:text-green-600 transition-colors"
                />
                {copiedAccount === account?.account_number && (
                  <span className="absolute top-6 left-0 text-xs text-green-700 whitespace-nowrap bg-white px-1 rounded">
                    Copiado!
                  </span>
                )}
              </div>
            </div>

            <CardAction>
              <Avatar className="h-10 w-12 rounded-lg">
                <AvatarImage
                  src={account.image || flags[account.type ?? "Nio"]}
                  alt={account.currency || "currencyType"}
                />
              </Avatar>
            </CardAction>
          </CardHeader>

          <CardFooter className="flex-col items-start gap-1.5 text-xl font-semibold">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {account.balance}{" "}
              {account.currency === "USD"
                ? "$"
                : account.currency === "EUR"
                ? "€"
                : "C$"}
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
