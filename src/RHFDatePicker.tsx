import React from "react";
import { DatePicker, DatePickerProps } from "@mantine/dates";
import {
  useController,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { Input } from "@mantine/core";

type Props<T extends FieldValues = FieldValues> = DatePickerProps & {
  name: UseControllerProps<T>["name"];
  rules?: UseControllerProps<T>["rules"];
  defaultValue?: UseControllerProps<T>["defaultValue"];
};

function RHFDatePicker<T extends FieldValues = FieldValues>(props: Props<T>) {
  const { name, rules, defaultValue, ...others } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules });

  return (
    <>
      <DatePicker
        {...field}
        value={(field.value as any) instanceof Date ? field.value : null}
        {...others}
        onChange={(value) => field.onChange(value)}
      />
      {error && (
        <Input.Error>
          {error.message === "" && error.type === "required"
            ? "Required"
            : error.message}
        </Input.Error>
      )}
    </>
  );
}
export default RHFDatePicker;

export const createDatePicker = <T extends FieldValues>() => {
  const Field = (props: Props<T>) => <RHFDatePicker {...props} />;
  return Field;
};
