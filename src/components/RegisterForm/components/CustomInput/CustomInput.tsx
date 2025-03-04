import { Control, FieldError, Controller } from "react-hook-form";
import { FormValues } from "../../model";
import classes from "./CustomInput.module.scss";
import { ReactNode } from "react";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  placeholder: string;
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
}: Props) => {
  return (
    <div className={classes.formGroup}>
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
