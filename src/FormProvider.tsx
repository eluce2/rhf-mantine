import React from "react";
import { DevTool } from "@hookform/devtools";
import {
  FieldValues,
  FormProvider,
  FormProviderProps,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { createAutocompleteField } from "./RHFAutocomplete";
import { createCheckboxField } from "./RHFCheckbox";
import { createChipField } from "./RHFChip";
import { createColorInputField } from "./RHFColorInput";
import { createColorPickerField } from "./RHFColorPicker";
import { createDateInputField } from "./RHFDateInput";
import { createDatePicker } from "./RHFDatePicker";
import { createDatePickerField } from "./RHFDatePickerInput";
import { createDateTimePickerField } from "./RHFDateTimerPicker";
import { createFileInputField } from "./RHFFileInput";
import { createJsonInputField } from "./RHFJsonInput";
import { createMonthPicker } from "./RHFMonthPicker";
import { createMonthPickerInput } from "./RHFMonthPickerInput";
import { createMultiSelectField } from "./RHFMultiSelect";
import { createNativeSelectField } from "./RHFNativeSelect";
import { createNumberInputField } from "./RHFNumberInput";
import { createPasswordInputField } from "./RHFPasswordInput";
import { createRadioGroupField } from "./RHFRadioGroup";
import { createRangeSliderField } from "./RHFRangeSlider";
import { createSegmentedControlField } from "./RHFSegmentedControl";
import { createSelectField } from "./RHFSelect";
import { createSliderField } from "./RHFSlider";
import { createSwitchField } from "./RHFSwitch";
import { createTextareaField } from "./RHFTextarea";
import { createTextInputField } from "./RHFTextInput";
import { createTimeInputField } from "./RHFTimeInput";
import { createYearPicker } from "./RHFYearPicker";
import { createYearPickerInput } from "./RHFYearPickerInput";

type CreateFormProviderProps<T extends FieldValues> = FormProviderProps<T> & {
  onSubmit?: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
};

type FormComponent<T extends FieldValues> = React.FC<
  CreateFormProviderProps<T> & { debug?: boolean }
> & {
  Autocomplete: ReturnType<typeof createAutocompleteField<T>>;
  Checkbox: ReturnType<typeof createCheckboxField<T>>;
  Chip: ReturnType<typeof createChipField<T>>;
  ColorInput: ReturnType<typeof createColorInputField<T>>;
  ColorPicker: ReturnType<typeof createColorPickerField<T>>;
  FileInput: ReturnType<typeof createFileInputField<T>>;
  TextInput: ReturnType<typeof createTextInputField<T>>;
  Textarea: ReturnType<typeof createTextareaField<T>>;
  JsonInput: ReturnType<typeof createJsonInputField<T>>;
  MultiSelect: ReturnType<typeof createMultiSelectField<T>>;
  NativeSelect: ReturnType<typeof createNativeSelectField<T>>;
  NumberInput: ReturnType<typeof createNumberInputField<T>>;
  PasswordInput: ReturnType<typeof createPasswordInputField<T>>;
  SegmentedControl: ReturnType<typeof createSegmentedControlField<T>>;
  Select: ReturnType<typeof createSelectField<T>>;
  Slider: ReturnType<typeof createSliderField<T>>;
  RangeSlider: ReturnType<typeof createRangeSliderField<T>>;
  Switch: ReturnType<typeof createSwitchField<T>>;
  RadioGroup: ReturnType<typeof createRadioGroupField<T>>;
  DateInput: ReturnType<typeof createDateInputField<T>>;
  DatePicker: ReturnType<typeof createDatePicker<T>>;
  DatePickerInput: ReturnType<typeof createDatePickerField<T>>;
  DateTimePickerInput: ReturnType<typeof createDateTimePickerField<T>>;
  MonthPicker: ReturnType<typeof createMonthPicker<T>>;
  MonthPickerInput: ReturnType<typeof createMonthPickerInput<T>>;
  TimeInput: ReturnType<typeof createTimeInputField<T>>;
  YearPicker: ReturnType<typeof createYearPicker<T>>;
  YearPickerInput: ReturnType<typeof createYearPickerInput<T>>;
};

export const createFormProvider = <
  T extends FieldValues = FieldValues,
>(): FormComponent<T> => {
  const Form = (props: CreateFormProviderProps<T> & { debug?: boolean }) => {
    const {
      onSubmit = (values) => console.log(values),
      onError = (err) => console.error(err),
      debug = false,
      children,
      ...formMethods
    } = props;
    return (
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit, onError)}>
          {children}
          {debug && <DevTool control={formMethods.control} />}
        </form>
      </FormProvider>
    );
  };

  // here is the point where we infer the generic to a child
  Form.Autocomplete = createAutocompleteField<T>();
  Form.Checkbox = createCheckboxField<T>();
  Form.Chip = createChipField<T>();
  Form.ColorInput = createColorInputField<T>();
  Form.ColorPicker = createColorPickerField<T>();
  Form.FileInput = createFileInputField<T>();
  Form.TextInput = createTextInputField<T>();
  Form.Textarea = createTextareaField<T>();
  Form.JsonInput = createJsonInputField<T>();
  Form.MultiSelect = createMultiSelectField<T>();
  Form.NativeSelect = createNativeSelectField<T>();
  Form.NumberInput = createNumberInputField<T>();
  Form.PasswordInput = createPasswordInputField<T>();
  Form.SegmentedControl = createSegmentedControlField<T>();
  Form.Select = createSelectField<T>();
  Form.Slider = createSliderField<T>();
  Form.RangeSlider = createRangeSliderField<T>();
  Form.Switch = createSwitchField<T>();
  Form.RadioGroup = createRadioGroupField<T>();

  Form.DateInput = createDateInputField<T>();
  Form.DatePicker = createDatePicker<T>();
  Form.DatePickerInput = createDatePickerField<T>();
  Form.DateTimePickerInput = createDateTimePickerField<T>();
  Form.MonthPicker = createMonthPicker<T>();
  Form.MonthPickerInput = createMonthPickerInput<T>();
  Form.TimeInput = createTimeInputField<T>();
  Form.YearPicker = createYearPicker<T>();
  Form.YearPickerInput = createYearPickerInput<T>();

  return Form;
};
