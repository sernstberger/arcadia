import { useState } from "react";
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { CommentsProps } from "../../apps/Video/types";

const Comment = ({ user, comment, createDate }: CommentsProps) => {
  const [replying, setReplying] = useState<boolean>(false);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar src={user.avatar} />
      <div>
        <Typography>
          <strong>{user.name}</strong> {createDate}
        </Typography>
        <Typography>{comment}</Typography>
        <div>
          <IconButton>
            <ThumbUp />
          </IconButton>{" "}
          511
          <IconButton>
            <ThumbDown />
          </IconButton>
          {!replying && (
            <Button onClick={() => setReplying(true)}>Reply</Button>
          )}
          {replying && (
            <div>
              <TextField label="foooo" />
              <Button onClick={() => setReplying(false)}>Cancel</Button>
              <Button>Reply</Button>
            </div>
          )}
        </div>
      </div>
    </Stack>
  );
};

export default Comment;
