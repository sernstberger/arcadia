import { TextField, OutlinedTextFieldProps } from "@mui/material";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

interface ConnectedTextFieldProps
  extends Omit<OutlinedTextFieldProps, "variant"> {
  fieldName: string;
}

const ConnectedTextField = ({
  fieldName,
  ...rest
}: ConnectedTextFieldProps) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return <TextField {...register(fieldName)} {...rest} />;
};

export default ConnectedTextField;
