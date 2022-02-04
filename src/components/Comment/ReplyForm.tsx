import { useState } from "react";
import { Button, Stack, TextField, Collapse } from "@mui/material";

export interface ReplyFormProps {
  id: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ReplyForm = ({ id, open, setOpen }: ReplyFormProps) => {
  return (
    <Collapse in={open}>
      <TextField label="Add a public reply..." />
      <Stack direction="row" justifyContent="space-between">
        emojis
        <div>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained">Reply</Button>
        </div>
      </Stack>
    </Collapse>
  );
};

export default ReplyForm;
