import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./models";
import { useNavigate } from "react-router-dom";
import classes from "./RegisterForm.module.scss";
import { FaUser, FaPen, FaEnvelope, FaLock } from "react-icons/fa6";
import { CustomInput } from "../../components";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <CustomInput<FormValues>
          label="Nombre"
          icon={<FaPen />}
          control={control}
          placeholder="Nombre"
          name="name"
          type="text"
          error={errors.name}
        />
        <CustomInput<FormValues>
          label="Apellido"
          icon={<FaPen />}
          control={control}
          placeholder="Apellido"
          name="lastname"
          type="text"
          error={errors.lastname}
        />
        <CustomInput<FormValues>
          label="Nombre de usuario"
          icon={<FaUser />}
          control={control}
          placeholder="Usuario"
          name="username"
          type="text"
          error={errors.username}
        />
        <CustomInput<FormValues>
          label="Email"
          icon={<FaEnvelope />}
          control={control}
          placeholder="Email"
          name="email"
          type="email"
          error={errors.email}
        />
        <CustomInput<FormValues>
          label="Contraseña"
          icon={<FaLock />}
          control={control}
          placeholder="Contraseña"
          name="password"
          type="password"
          error={errors.password}
        />
        <CustomInput<FormValues>
          label="Confirmar contraseña"
          icon={<FaLock />}
          control={control}
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          error={errors.confirmPassword}
        />

        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};
