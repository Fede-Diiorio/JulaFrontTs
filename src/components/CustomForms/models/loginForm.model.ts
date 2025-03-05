import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string({ required_error: "Requerido" })
    .min(1, "El nombre de usuario es obligatorio"),
  password: z
    .string({ required_error: "Requerido" })
    .min(6, "La contraseña es demasiado corta"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
