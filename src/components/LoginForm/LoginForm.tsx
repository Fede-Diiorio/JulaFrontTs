import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./models";
import { FaUser, FaLock } from "react-icons/fa6";
import { CustomInput } from "../../components";
import { Link } from "react-router-dom";
import classes from "./LoginFrom.module.scss";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
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
