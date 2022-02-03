import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
  Fab,
  CardContent,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListingCard from ".";
import { formatDistanceToNow, parseISO } from "date-fns";
import { VideoProps } from "../../apps/Video/types";
import { timeAgo } from "../../utils";

const VideoListingCard = ({
  id,
  title,
  details,
  image,
  views,
  user,
  createDate,
}: VideoProps) => {
  console.log("!!!", createDate, typeof createDate);
  return (
    <ListingCard
      title={title}
      image={image}
      subtitle={<Typography variant="body2">{user.name}</Typography>}
      details={
        <Typography variant="body2">
          {views} views &bull; {timeAgo(createDate)}
        </Typography>
      }
      leftAction={<Avatar alt={user.name} src={user.avatar} />}
      // rightAction={<MoreVert />}
      href={`/videos/${id}`}
    />
  );
};
export default VideoListingCard;
