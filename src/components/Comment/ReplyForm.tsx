import { useState } from "react";
import { Button, Stack, TextField, Collapse } from "@mui/material";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import ConnectedTextField from "../Form/ConnectedTextField";

export interface ReplyFormProps {
  id: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ReplyForm = ({ id, open, setOpen }: ReplyFormProps) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <Collapse in={open}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ConnectedTextField fieldName="foo" label="Add a public reply..." />

          <Stack
            direction="row"
            justifyContent="space-between"
            paddingY={1}
            spacing={2}
          >
            {/* emojis */}
            <div />
            <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="info"
                disabled={false}
                type="submit"
              >
                Reply
              </Button>
            </Stack>
          </Stack>
        </form>
      </FormProvider>
    </Collapse>
  );
};

export default ReplyForm;
