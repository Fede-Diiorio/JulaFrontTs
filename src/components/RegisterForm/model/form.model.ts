import { z } from "zod";

export const schema = z
  .object({
    name: z
      .string({ required_error: "Requerido" })
      .min(1, "El nombre es obligatorio"),
    lastname: z
      .string({ required_error: "Requerido" })
      .min(1, "El apellido es obligatorio"),
    username: z
      .string({ required_error: "Requerido" })
      .min(1, "El nombre de usuario es obligatorio"),
    email: z
      .string({ required_error: "Requerido" })
      .email("Correo inválido")
      .min(1, "El correo es obligatorio"),
    password: z
      .string({ required_error: "Requerido" })
      .min(6, "La contraseña es demasiado corta"),
    confirmPassword: z
      .string({ required_error: "Requerido" })
      .min(6, "La confirmación es demasiado corta"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "las contraseñas no coninciden",
    path: ["confirmPassword"],
  });

// Conversion del tipo de zod a tipado typeScript
export type FormValues = z.infer<typeof schema>;
