import classes from "./FormLayout.module.scss";
import { ReactNode } from "react";
import logo from "../../../../assets/logo.jpg";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  legend: string;
  children: ReactNode;
}

export const FormLayout = ({ title, legend, children }: Props) => {
  return (
    <div className={classes.box}>
      <Link to={"/login"} className={classes.link}>
        <img src={logo} alt="Logo de la Facultad" className={classes.logo} />
      </Link>

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
