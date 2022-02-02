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
  user: { id: string; name: string; avatar: string };
  views: number;
  createDate: Date;
}

const VideoListingCard = ({
  id,
  title,
  details,
  image,
  views,
  emphasis,
  children,
  subtitle = undefined,
  user,
  createDate,
}: VideoListingCardProps) => {
  return (
    <ListingCard
      title={title}
      image={image}
      subtitle={<Typography variant="body2">{user.name}</Typography>}
      details={
        <Typography variant="body2">
          {views} views &bull; {createDate} days ago
        </Typography>
      }
      leftAction={<Avatar alt={user.name} src={user.avatar} />}
      // rightAction={<MoreVert />}
      href={`/videos/${id}`}
    />
  );
};
export default VideoListingCard;
