import { Control, FieldError, Controller } from "react-hook-form";
import { FormValues } from "../../models";
import classes from "./CustomInput.module.scss";
import { ReactNode } from "react";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  placeholder: string;
  label?: string;
  type?: string;
  error?: FieldError;
  icon?: ReactNode;
}

export const InputForm = ({
  name,
  control,
  placeholder,
  type,
  error,
  icon,
  label,
}: Props) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div className={classes.inputWrapper}>
        {icon && <span className={classes.icon}>{icon}</span>}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              placeholder={placeholder}
              id={name}
              type={type}
              {...field}
              className={`${classes.formControl} ${
                error ? classes.isValid : ""
              }`}
            />
          )}
        />
      </div>
      {error && <p className={classes.error}>{error.message}</p>}
    </div>
  );
};
