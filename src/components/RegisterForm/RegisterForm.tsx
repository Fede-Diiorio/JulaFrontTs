import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "./components";
import { FormValues, schema } from "./model";
import { useNavigate } from "react-router-dom";
import classes from "./RegisterForm.module.scss";
import { Container } from "../../styled_components";
import { FaUser, FaPen, FaEnvelope, FaLock } from "react-icons/fa6";

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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <InputForm
          icon={<FaPen />}
          control={control}
          placeholder="Nombre"
          name="name"
          type="text"
          error={errors.name}
        />
        <InputForm
          icon={<FaPen />}
          control={control}
          placeholder="Apellido"
          name="lastname"
          type="text"
          error={errors.lastname}
        />
        <InputForm
          icon={<FaUser />}
          control={control}
          placeholder="Nombre de usuario"
          name="username"
          type="text"
          error={errors.username}
        />
        <InputForm
          icon={<FaEnvelope />}
          control={control}
          placeholder="Email"
          name="email"
          type="email"
          error={errors.email}
        />
        <InputForm
          icon={<FaLock />}
          control={control}
          placeholder="Contraseña"
          name="password"
          type="password"
          error={errors.password}
        />
        <InputForm
          icon={<FaLock />}
          control={control}
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          error={errors.confirmPassword}
        />

        <button type="submit">Registrarse</button>
      </form>
    </Container>
  );
};
