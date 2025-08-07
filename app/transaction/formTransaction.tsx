import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema, FormSchemaType } from "@/schemes/formSchema";
import InputSelect from "@/components/Transaction/inputSelect";
import InteractiveInput from "@/components/Transaction/inputs";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useCreateTransaction } from "@/hooks/useCreateTransactions";
import { toast } from "sonner";

export const FormTransaction = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transactionType: "",
      destinyAccount: "",
      originAccount: "",
      debitConcept: "",
      creditConcept: "",
      reference: "",
      confirmationEmail: "",
      amount: "",
      currency: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const { users, loading } = useDashboardData();
  const { createTransaction } = useCreateTransaction();
  const accountList = users[0]?.products?.map((acct) => ({
    value: acct.id,
    label: acct.id,
  }));

  const onSubmit = async (data: FormSchemaType) => {
    const transferRequest = {
      origin: data.originAccount,
      destination: data.destinyAccount,
      amount: {
        currency: data.currency,
        value: Number(data.amount),
      },
    };
    const responseTransaction = await createTransaction(transferRequest);
    if (responseTransaction?.transaction_number) {
      toast.success("Se realizo la transferencia correctamente");
      reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 bg-[#F9FAF9]">
          <InputSelect
            label="Tipo de transacción"
            name="transactionType"
            control={form.control}
            options={[
              {
                value: "entre_cuentas_propias",
                label: "Entre cuentas propias",
              },
              { value: "tercero_lafise", label: "Tercero lafise" },
              { value: "banco_local", label: "Banco local" },
            ]}
            placeholder="Seleccione"
            // className="lg:w-[228px] py-[27px]"
          />
          <InputSelect
            label="Cuenta origen"
            name="originAccount"
            control={form.control}
            options={accountList}
            placeholder="Seleccione"
            // className="lg:w-[228px] py-[27px]"
          />
          <InputSelect
            label="Cuenta Destino"
            name="destinyAccount"
            control={form.control}
            options={accountList}
            placeholder="Seleccione"
            // className="lg:w-[228px] py-[27px]"
          />
          <InputSelect
            label="Moneda"
            name="currency"
            control={form.control}
            options={[
              {
                value: "NIO",
                label: "NIO",
              },
              { value: "USD", label: "USD" },
            ]}
            placeholder="Seleccione moneda"
            // className="lg:w-[228px] py-[27px]"
          />
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 m-4">
          <InteractiveInput
            label="Monto"
            name="amount"
            type="number"
            control={form.control}
          />

          <InteractiveInput
            label="Concepto de débito"
            name="debitConcept"
            control={form.control}
          />
          <InteractiveInput
            label="Concepto de crédito"
            name="creditConcept"
            control={form.control}
          />
          <InteractiveInput
            label="Referencia"
            name="reference"
            control={form.control}
          />
          <InteractiveInput
            label="Enviar confirmación a:"
            name="confirmationEmail"
            control={form.control}
          />
        </section>
        <div className="flex justify-center items-center py-10">
          <Button type="submit" className="font-normal text-md p-6 rounded">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
};
