import React from "react";
import { ButtonOptions } from "./buttonOptions";

export const ButtonContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <ButtonOptions title="Movimientos" />
      <ButtonOptions title="Estado" />
      <ButtonOptions title="Detalle" />
      <ButtonOptions title="Fondo no Disponible" />
    </div>
  );
};
