// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { InputForm } from "../RegisterForm/components";
// import { FormValuesLogin, loginSchema } from "../RegisterForm/model";
// import { Container } from "../../styled_components";
// import classes from "./CustomForms.module.scss";

// export const LoginForm = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValuesLogin>({
//     resolver: zodResolver(loginSchema),
//     mode: "onBlur",
//   });

//   const onSubmit: SubmitHandler<FormValuesLogin> = (data) => {
//     console.log(data);
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
//         <p>Login</p>
//         <p>Input</p>

//         <button type="submit">Loguearse</button>
//       </form>
//     </Container>
//   );
// };

export const LoginForm = () => {
  return <h1>Se viene</h1>;
};
