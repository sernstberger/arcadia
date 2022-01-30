import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ListingItemProps {
  title: string;
  image: string;
  details?: React.ReactNode;
  href?: string;
}

const ListingItem = ({ title, details, image }: ListingItemProps) => {
  return (
    <Card>
      <CardActionArea component={Link} to="/">
        <CardMedia {...{ image }} component="img" height="140" alt={title} />
        <Typography>{title}</Typography>
        <div>{details}</div>
      </CardActionArea>
    </Card>
  );
};
export default ListingItem;
