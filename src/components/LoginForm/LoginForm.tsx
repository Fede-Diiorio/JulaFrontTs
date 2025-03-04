import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "./components";
import { FormValues, schema } from "./models";
import classes from "./LoginFrom.module.scss";
import { Container } from "../../styled_components";
import { FaUser, FaLock } from "react-icons/fa6";

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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <InputForm
          icon={<FaUser />}
          control={control}
          placeholder="Nombre de usuario"
          name="username"
          type="text"
          error={errors.username}
        />
        <InputForm
          icon={<FaLock />}
          control={control}
          placeholder="Contraseña"
          name="password"
          type="password"
          error={errors.password}
        />

        <button type="submit">Loguearse</button>
      </form>
      <p>
        ¿No tienes una cuenta? <span>Regístrate</span>
      </p>
    </Container>
  );
};
