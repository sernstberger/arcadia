import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export interface ConnectedFormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

const ConnectedForm = ({ children, onSubmit }: ConnectedFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form {...{ onSubmit }}>{children}</form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default ConnectedForm;
