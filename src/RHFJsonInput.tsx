import React from "react";
import { JsonInput, JsonInputProps } from "@mantine/core";
import {
  useController,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues = FieldValues> = JsonInputProps & {
  name: UseControllerProps<T>["name"];
  rules?: UseControllerProps<T>["rules"];
  defaultValue?: UseControllerProps<T>["defaultValue"];
};

function RHFJsonInput<T extends FieldValues = FieldValues>(props: Props<T>) {
  const { name, rules, defaultValue, ...others } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules });

  return (
    <JsonInput
      {...field}
      value={field.value ?? ""}
      error={error ? error?.message ?? "This field is required" : false}
      {...others}
    />
  );
}
export default RHFJsonInput;

export const createJsonInputField = <T extends FieldValues>() => {
  const Field = (props: Props<T>) => <RHFJsonInput {...props} />;
  return Field;
};
