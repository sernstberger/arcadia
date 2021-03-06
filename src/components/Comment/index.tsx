import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  Collapse,
  Divider,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { timeAgo } from "../../utils";
import { CommentProps } from "./types";
import ReplyForm from "./ReplyForm";
import Rating from "../Rating";

export interface CommentComponentProps extends CommentProps {
  upvoteEnabled?: boolean;
  downvoteEnabled?: boolean;
}

const Comment = ({
  id,
  user,
  comment,
  createDate,
  replies,
  upvoteCount = 0,
  upvoteEnabled = false,
  downvoteEnabled = false,
  rating: defaultRating = null,
}: CommentComponentProps) => {
  const [replying, setReplying] = useState<boolean>(false);
  const [rating, setRating] =
    useState<"like" | "dislike" | null>(defaultRating);
  const [showReplies, setShowReplies] = useState<boolean>(false);

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ marginY: 2 }}>
        <Avatar src={user.avatar} />
        <div>
          <Typography variant="body2">
            <strong>{user.name}</strong> {timeAgo(createDate)}
          </Typography>
          <Typography>{comment}</Typography>
          <Stack direction="row">
            <Rating
              {...{
                upvoteEnabled,
                downvoteEnabled,
                rating,
                setRating,
                upvoteCount,
              }}
              size="small"
            />
            <Button
              onClick={() => setReplying(true)}
              disabled={replying}
              size="small"
              color="inherit"
            >
              Reply
            </Button>
          </Stack>
          <ReplyForm id={id} open={replying} setOpen={setReplying} />
          {replies && replies?.length > 0 && (
            <>
              <Button
                startIcon={showReplies ? <ArrowDropUp /> : <ArrowDropDown />}
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies ? "Hide" : "Show"} {replies.length} replies
              </Button>
              <Collapse in={showReplies}>
                <Box marginBottom={3}>
                  {replies.map((reply: CommentProps) => {
                    return <Comment key={reply.createDate} {...reply} />;
                  })}
                </Box>
              </Collapse>
            </>
          )}
        </div>
      </Stack>
    </>
  );
};

export default Comment;
