import classes from "./Button.module.scss";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    <button onClick={parentMethod} className={classes.button}>
      {label}
    </button>
  );
};
