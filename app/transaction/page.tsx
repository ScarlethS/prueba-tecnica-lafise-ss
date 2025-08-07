"use client";
import { Paper } from "@/components/paper";
import React from "react";
import { FormTransaction } from "./formTransaction";

const Transaction = () => {
  return (
    <Paper title="Transferir">
      <FormTransaction />
    </Paper>
  );
};

export default Transaction;
