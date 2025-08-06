"use client";
import { Paper } from "@/components/paper";
import InteractiveInput from "@/components/Transaction/inputs";
import InputSelect from "@/components/Transaction/inputSelect";
import React from "react";

const Transaction = () => {
  return (
    <Paper title="Transferir">
      <div className="flex flex-col lg:flex-row justify-between w-auto bg-[#F9FAF9]">
        <InputSelect label="Tipo de transaccion" />
        <InputSelect label="Cuenta" />
      </div>
      <section className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-2 m-4">
        <InteractiveInput label="Concepto de débito" />
        <InteractiveInput label="Concepto de crédito" />
      </section>
      <section className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-2 m-4">
        <InteractiveInput label="Referencia" />
        <InteractiveInput label="Enviar confirmación a:" />
      </section>
    </Paper>
  );
};

export default Transaction;
