import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  ToggleButton,
  IconButton,
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

export interface PropertyCardProps {
  image: string;
  location: string;
  price: number;
  rating: {
    average: number;
    numberOfReviews: number;
  };
  title: React.ReactNode;
  description?: React.ReactNode;
  favorite?: boolean;
  propertyType?: string;
  beds?: number;
  baths?: number;
}

const PropertyCard = ({
  image,
  price,
  title,
  location,
  rating,
  description = null,
  favorite = false,
  propertyType = "House",
  beds = undefined,
  baths = undefined,
}: PropertyCardProps) => {
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
          <Typography variant="subtitle2">{title}</Typography>
          <Typography>{location}</Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignContent: "center" }}
          >
            <Star /> {rating.average} ({rating.numberOfReviews} Reviews)
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Stack direction="row" justifyContent="space-around" spacing={2}>
            <LabeledIcon icon={<Home />} label={propertyType} />
            <LabeledIcon icon={<Bed />} label={`${beds} Beds`} />
            <LabeledIcon icon={<Bathtub />} label={`${baths} Baths`} />
            <LabeledIcon icon={<DirectionsCar />} label="Garage" />
          </Stack>
          <Divider sx={{ marginY: 2 }} />
          {description && <Typography>{description}</Typography>}
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Button variant="contained">Book now</Button>
        <IconButton
          value="check"
          component={ToggleButton}
          selected={isFavorite}
          onChange={() => {
            setFavorite(!isFavorite);
          }}
          data-testid="favorite-button"
        >
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>

        <Typography>
          <strong>{formatter.format(price)}</strong>/night
        </Typography>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
