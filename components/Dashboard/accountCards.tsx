import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy } from "lucide-react";

type AccountCardsProps = {
  type?: "string";
  image?: string;
  numberAccount?: number;
  amount?: number;
};

const flags = { Nio: "/download.png", Usd: "/usd.png", Euro: "/euro.png" };

export const AccountCards = ({
  type,
  image,
  numberAccount,
  amount,
}: AccountCardsProps) => {
  return (
    <Card className="w-full max-w-[353.53px] max-h-[150px] rounded shadow-md bg-white flex-shrink-0">
      <CardHeader>
        <CardDescription className="text-xl font-normal  text-black">
          {type}NIO Cuenta
        </CardDescription>
        <div className="flex items-center gap-2">
          <CardTitle className="text-sm text-primary font-medium tabular-nums @[250px]/card:text-3xl bg-primary-foreground px-2 rounded-l">
            {numberAccount} 13265822
          </CardTitle>
          <Copy className="h-4.5 w-4.5 text-green-800 cursor-pointer" />
        </div>
        <CardAction>
          <Avatar className="h-10 w-12 rounded-lg">
            <AvatarImage src="/download.png" alt="currencyType" />
          </Avatar>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-xl font-semibold">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {amount} C$ 205222
        </div>
      </CardFooter>
    </Card>
  );
};
