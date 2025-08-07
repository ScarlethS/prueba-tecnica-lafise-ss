import { Currency } from "lucide-react";
import { positive, z } from "zod";

export const formSchema = z.object({
  transactionType: z.string().min(1, "Tipo de transacción es requerido"),
  destinyAccount: z.string().min(1, "Cuenta es requerida"),
  originAccount: z.string().min(1, "Cuenta es requerida"),
  debitConcept: z.string().min(1, "Concepto de débito es requerido"),
  creditConcept: z
    .string()
    .min(1, "Concepto de crédito es requerido")
    .max(20, "Tipo de transacción debe tener máximo 50 caracteres"),
  reference: z.string().optional(),
  confirmationEmail: z.string().optional(),
  amount: z.string().min(1, "Ingrese un monto"),
  currency: z.string().min(1, "Seleccione una moneda"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
