import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  Star,
  Bathtub,
  Bed,
  DirectionsCar,
  Home,
} from "@mui/icons-material";
import { useState } from "react";
import LabeledIcon from "../LabeledIcon";

interface RealEstateCardProps {
  image: string;
  location: string;
  price: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  favorite?: boolean;
}

const RealEstateCard = ({
  image,
  price,
  title,
  location,
  description = null,
  favorite = false,
}: RealEstateCardProps) => {
  const [isFavorite, setFavorite] = useState(favorite);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="subtitle2">{location}</Typography>
          {/* <Typography sx={{ display: "flex", alignContent: "center" }}>
            <Star /> 3.4 (38 Reviews)
          </Typography> */}
          {/* <Divider sx={{ marginY: 2 }} />
          <Stack direction="row" justifyContent="space-around" spacing={2}>
            <LabeledIcon icon={<Home />} label="House" />
            <LabeledIcon icon={<Bed />} label="2 Beds" />
            <LabeledIcon icon={<Bathtub />} label="2 Baths" />
            <LabeledIcon icon={<DirectionsCar />} label="Garage" />
          </Stack>
          <Divider sx={{ marginY: 2 }} /> */}
          {description && <Typography>{description}</Typography>}
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Button variant="contained">Book now</Button>
        <IconButton onClick={() => setFavorite((prevState: any) => !prevState)}>
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
        <Typography>
          <strong>{formatter.format(price)}</strong>/night
        </Typography>
      </CardActions>
    </Card>
  );
};

export default RealEstateCard;
