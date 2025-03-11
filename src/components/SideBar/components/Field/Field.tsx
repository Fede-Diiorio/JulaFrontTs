import { ReactNode } from "react";
import classes from "./Field.module.scss";

interface Props {
  icon: ReactNode;
  label: string;
  parentMethod: () => void;
}

export const Field = ({ icon, label, parentMethod }: Props) => {
  return (
    <button onClick={parentMethod} className={classes.button}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.label}>{label}</span>
    </button>
  );
};
