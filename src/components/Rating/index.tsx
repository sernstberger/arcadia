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
  rating: "like" | "dislike" | null;
  setRating: (rating: "like" | "dislike" | null) => void;
}

const Rating = ({
  upvoteEnabled = false,
  downvoteEnabled = false,
  rating,
  setRating,
}: RatingProps) => {
  return (
    <Stack direction="row" spacing={2}>
      {upvoteEnabled && (
        <Stack direction="row" alignItems="center">
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
    </Stack>
  );
};

export default Rating;
