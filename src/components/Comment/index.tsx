import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  ToggleButton,
} from "@mui/material";
import {
  ThumbDownAlt,
  ThumbDownOffAlt,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { timeAgo } from "../../utils";
import { CommentProps } from "./types";

export interface CommentComponentProps extends CommentProps {
  upvoteEnabled?: boolean;
  downvoteEnabled?: boolean;
}

const Comment = ({
  user,
  comment,
  createDate,
  replies,
  upvoteEnabled = false,
  downvoteEnabled = false,
  rating: defaultRating = null,
}: CommentComponentProps) => {
  const [replying, setReplying] = useState<boolean>(false);
  const [rating, setRating] =
    useState<"like" | "dislike" | null>(defaultRating);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar src={user.avatar} />
        <div>
          <Typography>
            <strong>{user.name}</strong> {timeAgo(createDate)}
          </Typography>
          <Typography>{comment}</Typography>
          <Stack direction="row">
            {upvoteEnabled && (
              <Stack direction="row">
                <IconButton
                  value="check"
                  component={ToggleButton}
                  selected={rating === "like"}
                  onChange={() => {
                    setRating(rating === "like" ? null : "like");
                  }}
                >
                  {rating === "like" ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
                </IconButton>
                <Typography>511</Typography>
              </Stack>
            )}
            {downvoteEnabled && (
              <IconButton
                value="check"
                component={ToggleButton}
                selected={rating === "dislike"}
                onChange={() => {
                  setRating(rating === "dislike" ? null : "dislike");
                }}
              >
                {rating === "dislike" ? <ThumbDownAlt /> : <ThumbDownOffAlt />}
              </IconButton>
            )}

            <Button onClick={() => setReplying(true)} disabled={replying}>
              Reply
            </Button>
          </Stack>
          {replying && (
            <div>
              <TextField label="Add a public reply..." />
              <Stack direction="row" justifyContent="space-between">
                emojis
                <div>
                  <Button onClick={() => setReplying(false)}>Cancel</Button>
                  <Button variant="contained">Reply</Button>
                </div>
              </Stack>
            </div>
          )}
        </div>
      </Stack>
      {replies && (
        <Box marginLeft={7}>
          {replies.map((reply: CommentProps) => {
            return <Comment {...reply} />;
          })}
        </Box>
      )}
    </div>
  );
};

export default Comment;
