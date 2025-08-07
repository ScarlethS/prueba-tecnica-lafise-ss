import Image from "next/image";

interface CreditCardProps {
  color?: string;
  cardNumber: string;
  name: string;
  expirationDate: string;
}

export const CreditCard = ({
  color = "bg-emerald-600",
  cardNumber,
  name,
  expirationDate,
}: CreditCardProps) => {
  // Función para enmascarar el número de tarjeta
  const maskCardNumber = (number: string) => {
    const cleaned = number.replace(/\s/g, "");
    if (cleaned.length !== 16) return number;

    const first4 = cleaned.slice(0, 4);
    const last4 = cleaned.slice(-4);
    return `${first4} **** **** ${last4}`;
  };

  return (
    <div
      className={`w-full max-w-[353.53px] max-h-[208.36px] rounded-[5px] p-6 pt-2 text-white relative shadow-lg ${color}`}
    >
      <div className="flex items-center mb-8 h-11 w-20 overflow-hidden rounded">
        <Image src="/frame.png" alt="Banco" height={28} width={87} />
      </div>
      <div className="mb-6 font-mono tracking-wider text-sm sm:text-xl">
        {maskCardNumber(cardNumber)}
      </div>
      <div className="flex justify-between items-end pt-4">
        <div>
          <div className="text-xs font-medium font-[lato]">
            {name ?? "user"}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[7.8px] opacity-80 mb-1 font-[lato]">
            Expire date
          </div>
          <div className="text-sm font-[lato]">{expirationDate ?? "00/00"}</div>
        </div>
      </div>
    </div>
  );
};
