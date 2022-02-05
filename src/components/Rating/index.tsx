import { IconButton, Stack, Typography, ToggleButton } from "@mui/material";
import {
  ThumbDownAlt,
  ThumbDownOffAlt,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";

export interface RatingProps {
  upvoteEnabled?: boolean;
  downvoteEnabled?: boolean;
  upvoteCount?: number;
  rating: "like" | "dislike" | null;
  setRating: (rating: "like" | "dislike" | null) => void;
  size?: "small" | "medium" | "large";
}

const Rating = ({
  upvoteEnabled = false,
  downvoteEnabled = false,
  rating,
  setRating,
  size = "medium",
  upvoteCount = 0,
}: RatingProps) => {
  return (
    <Stack direction="row" spacing={2}>
      {upvoteEnabled && (
        <Stack direction="row" alignItems="center">
          <IconButton
            size={size}
            value="check"
            component={ToggleButton}
            selected={rating === "like"}
            onChange={() => {
              setRating(rating === "like" ? null : "like");
            }}
          >
            {rating === "like" ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
          </IconButton>
          {upvoteCount > 0 && (
            <Typography variant="body2">{upvoteCount}</Typography>
          )}
        </Stack>
      )}
      {downvoteEnabled && (
        <IconButton
          size={size}
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
    </Stack>
  );
};

export default Rating;
