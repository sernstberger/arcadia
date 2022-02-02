import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Button,
  Stack,
  Typography,
  Fab,
  CardContent,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListingCard from ".";

export interface VideoListingCardProps {
  id: string | number;
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  image: string;
  emphasis?: React.ReactNode;
  details?: React.ReactNode;
  leftAction?: any;
  rightAction?: any;
  user: string;
}

const VideoListingCard = ({
  id,
  title,
  details,
  image,
  emphasis,
  children,
  subtitle = undefined,
  leftAction = undefined,
  rightAction = undefined,
  user,
}: VideoListingCardProps) => {
  return (
    <ListingCard
      title={title}
      image={image}
      subtitle={<Typography variant="body2">Firething</Typography>}
      details={
        <Typography variant="body2">1222 views &bull; 5 days ago</Typography>
      }
      leftAction={<Avatar alt={user} src="/static/images/avatar/1.jpg" />}
      rightAction={<MoreVert />}
      href={`/videos/${id}`}
    />
  );
};
export default VideoListingCard;
