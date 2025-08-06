import { ButtonContainer } from "@/components/History/buttonContainer";
import { TableTransaction } from "@/components/History/table";
import { Paper } from "@/components/paper";
import React from "react";

const History = () => {
  return (
    <Paper title="Mis transacciones">
      <ButtonContainer />
      <div className="flex flex-col lg:flex-row mt-5">
        <TableTransaction />
      </div>
    </Paper>
  );
};

export default History;
