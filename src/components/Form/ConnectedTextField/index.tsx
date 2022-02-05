import { TextField, OutlinedTextFieldProps } from "@mui/material";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

interface ConnectedTextFieldProps
  extends Omit<OutlinedTextFieldProps, "variant"> {
  fieldName: string;
}

const ConnectedTextField = ({ fieldName }: ConnectedTextFieldProps) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return <TextField {...register(fieldName)} label="Add a public reply..." />;
};

export default ConnectedTextField;
