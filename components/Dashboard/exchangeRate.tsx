"use client";

import { useState } from "react";
import { ChevronDown, ArrowLeftRight } from "lucide-react";

interface Currency {
  code: string;
  name: string;
  rate: number;
}

interface ExchangeRateProps {
  currencies?: Currency[];
  className?: string;
}

const defaultCurrencies: Currency[] = [
  { code: "NIO", name: "Córdoba", rate: 35.1 },
  { code: "USD", name: "USD", rate: 35.95 },
  { code: "EUR", name: "Euro", rate: 38.2 },
];

export default function ExchangeRate({
  currencies = defaultCurrencies,
  className = "",
}: ExchangeRateProps) {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const CustomSelect = ({
    currency,
    isOpen,
    setIsOpen,
    onSelect,
    currencies,
  }: {
    currency: Currency;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    onSelect: (currency: Currency) => void;
    currencies: Currency[];
  }) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
      >
        <span>{currency.name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {currencies.map((curr) => (
            <button
              key={curr.code}
              onClick={() => {
                onSelect(curr);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-xs text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {curr.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`px-6 ${className}`}>
      <div className="w-[100%] border-t-1 border-gray-200"></div>
      {/* Título */}
      <h2 className="text-lg font-semibold text-gray-800 my-4">
        Tasa de cambio
      </h2>

      {/* Selectores de moneda */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <CustomSelect
          currency={fromCurrency}
          isOpen={isFromOpen}
          setIsOpen={setIsFromOpen}
          onSelect={setFromCurrency}
          currencies={currencies}
        />

        <CustomSelect
          currency={toCurrency}
          isOpen={isToOpen}
          setIsOpen={setIsToOpen}
          onSelect={setToCurrency}
          currencies={currencies}
        />
      </div>

      {/* Visualización de tasas */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-700">
          {fromCurrency.code}: {fromCurrency.rate}
        </div>

        <button
          onClick={handleSwapCurrencies}
          className="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          title="Intercambiar monedas"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        <div className="text-sm font-semibold text-gray-700 text-wrap">
          {toCurrency.code}: {toCurrency.rate}
        </div>
      </div>
    </div>
  );
}
