import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

const RealEstateCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h1">Title goes here</Typography>
        <Typography variant="h2">Location goes here</Typography>
        <Typography variant="h3">Reviews</Typography>
        <Divider />
        icons
        <Divider />
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          explicabo? Ipsam dolorum harum asperiores praesentium quas expedita
          distinctio at perspiciatis, voluptate saepe vero non temporibus
          maiores quae consequatur quia quo?
        </Typography>
      </CardContent>
      <CardActions
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Button variant="contained">Book now</Button>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
        <Typography>$299.00/night</Typography>
      </CardActions>
    </Card>
  );
};

export default RealEstateCard;
