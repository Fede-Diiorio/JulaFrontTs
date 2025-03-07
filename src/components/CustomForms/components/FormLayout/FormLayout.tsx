import classes from "./FormLayout.module.scss";
import { ReactNode } from "react";
import logo from "../../../../assets/logo.jpg";

interface Props {
  title: string;
  legend: string;
  children: ReactNode;
}

export const FormLayout = ({ title, legend, children }: Props) => {
  return (
    <div className={classes.box}>
      <img src={logo} alt="Logo de la Facultad" className={classes.logo} />
      <section className={classes.loginSection}>
        <hgroup>
          <h2>{title}</h2>
          <h3>{legend}</h3>
        </hgroup>
        {children}
      </section>
      <div className={classes.image}></div>
    </div>
  );
};
