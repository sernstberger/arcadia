import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { FavoriteBorder, Star } from "@mui/icons-material";

const RealEstateCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h1">Title goes here</Typography>
        <Typography>Location goes here</Typography>
        <Typography>
          <Star /> 3.4 (<Link>38 Reviews</Link>)
        </Typography>
        <Divider />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <FavoriteBorder />
          <FavoriteBorder />
          <FavoriteBorder />
          <FavoriteBorder />
        </Stack>
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
