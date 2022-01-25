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

const LabeledIcon = ({ icon, label }: any) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default LabeledIcon;
