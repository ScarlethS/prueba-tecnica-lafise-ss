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
      className={`${color} rounded-2xl p-6 w-[353.53px] h-[208.36px] text-white relative shadow-lg`}
    >
      {/* Logo y nombre del banco */}
      <div className="flex items-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-white rounded flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
          </div>
          <div className="text-sm font-bold">
            <div>BANCO</div>
            <div>LAFISE</div>
          </div>
        </div>
      </div>

      {/* Número de tarjeta */}
      <div className="text-xl font-mono tracking-wider mb-6">
        {maskCardNumber(cardNumber)}
      </div>

      {/* Información del titular y fecha */}
      <div className="flex justify-between items-end">
        <div>
          <div className="text-sm font-medium">{name}</div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-80 mb-1">Expire date</div>
          <div className="text-sm font-mono">{expirationDate}</div>
        </div>
      </div>
    </div>
  );
};
