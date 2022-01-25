import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, Star } from "@mui/icons-material";
import { useState } from "react";
import LabeledIcon from "../LabeledIcon";

const RealEstateCard = ({
  title,
  description,
  image,
  favorite = false,
}: any) => {
  const [isFavorite, setFavorite] = useState(favorite);
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
          <Typography>Location goes here</Typography>
          <Typography sx={{ display: "flex", alignContent: "center" }}>
            <Star /> 3.4 (38 Reviews)
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Stack direction="row" justifyContent="space-around" spacing={2}>
            <LabeledIcon icon={<FavoriteBorder />} label="House" />
            <LabeledIcon icon={<FavoriteBorder />} label="House" />
            <LabeledIcon icon={<FavoriteBorder />} label="House" />
            <LabeledIcon icon={<FavoriteBorder />} label="House" />
          </Stack>
          <Divider sx={{ marginY: 2 }} />
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Button variant="contained">Book now</Button>
        <IconButton onClick={() => setFavorite((prevState: any) => !prevState)}>
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
        <Typography>$299.00/night</Typography>
      </CardActions>
    </Card>
  );
};

export default RealEstateCard;
