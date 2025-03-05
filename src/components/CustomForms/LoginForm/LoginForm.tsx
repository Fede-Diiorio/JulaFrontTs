import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "../models";
import { FaUser, FaLock } from "react-icons/fa6";
import { CustomInput } from "../../../components";
import { Link } from "react-router-dom";
import classes from "./LoginFrom.module.scss";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <CustomInput<LoginFormValues>
          label="Nombre de usuario"
          icon={<FaUser />}
          control={control}
          placeholder="Usuario"
          name="username"
          type="text"
          error={errors.username}
        />

        <CustomInput<LoginFormValues>
          label="Contraseña"
          icon={<FaLock />}
          control={control}
          placeholder="Contraseña"
          name="password"
          type="password"
          error={errors.password}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
      <p className={classes.registerMessage}>
        ¿Olvidaste tu contraseña? | ¿No tienes una cuenta?{" "}
        <Link to={"/register"} className={classes.link}>
          Regístrate
        </Link>
      </p>
    </div>
  );
};
