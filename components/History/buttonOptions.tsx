import React from "react";
import { Button } from "@/components/ui/button";

interface ButtonOptionsProps {
  title?: string;
}

export const ButtonOptions = ({ title }: ButtonOptionsProps) => {
  return (
    <Button
      variant="outline"
      className="border-none shadow-none bg-white text-[#8D918D] text-left hover:bg-primary-foreground hover:text-primary mb-4 mx-4 "
    >
      {title || "Opciones"}
    </Button>
  );
};
