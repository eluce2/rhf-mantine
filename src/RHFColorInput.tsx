import React from "react";
import { ColorInput, ColorInputProps } from "@mantine/core";
import {
  useController,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues = FieldValues> = ColorInputProps & {
  name: UseControllerProps<T>["name"];
  rules?: UseControllerProps<T>["rules"];
  defaultValue?: UseControllerProps<T>["defaultValue"];
};

function RHFColorInput<T extends FieldValues = FieldValues>(props: Props<T>) {
  const { name, rules, defaultValue, ...others } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ name, rules });

  return (
    <ColorInput
      {...field}
      value={field.value ?? ""}
      error={error ? error?.message ?? "This field is required" : false}
      {...others}
    />
  );
}
export default RHFColorInput;

export const createColorInputField = <T extends FieldValues>() => {
  const Field = (props: Props<T>) => <RHFColorInput {...props} />;
  return Field;
};
