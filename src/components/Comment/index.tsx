import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  ToggleButton,
  Collapse,
} from "@mui/material";
import {
  ArrowDropDown,
  ArrowDropUp,
  ThumbDownAlt,
  ThumbDownOffAlt,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { timeAgo } from "../../utils";
import { CommentProps } from "./types";
import ReplyForm from "./ReplyForm";

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
  const [showReplies, setShowReplies] = useState<boolean>(false);

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
          <ReplyForm id={1} open={replying} setOpen={setReplying} />
        </div>
      </Stack>
      {replies && replies?.length > 0 && (
        <>
          <Button
            startIcon={showReplies ? <ArrowDropUp /> : <ArrowDropDown />}
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? "Hide" : "Show"} {replies.length} replies
          </Button>
          <Collapse in={showReplies}>
            <Box marginLeft={7}>
              {replies.map((reply: CommentProps) => {
                return <Comment {...reply} />;
              })}
            </Box>
          </Collapse>
        </>
      )}
    </div>
  );
};

export default Comment;
