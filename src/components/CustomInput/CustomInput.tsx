import { Control, FieldValues, FieldError, Controller } from "react-hook-form";
import classes from "./CustomInput.module.scss";
import { ReactNode } from "react";

interface Props<T extends FieldValues> {
  name: keyof T;
  control: Control<T>;
  placeholder: string;
  label: string;
  type?: string;
  error?: FieldError;
  icon?: ReactNode;
}

export const CustomInput = <T extends FieldValues>({
  name,
  control,
  placeholder,
  type,
  error,
  icon,
  label,
}: Props<T>) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor={String(name)} className={classes.label}>
        {label}
      </label>
      <div className={classes.inputWrapper}>
        {icon && <span className={classes.icon}>{icon}</span>}
        <Controller
          name={name as any} // Se usa 'as any' para evitar errores con 'keyof T'
          control={control}
          render={({ field }) => (
            <input
              placeholder={placeholder}
              id={String(name)}
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
