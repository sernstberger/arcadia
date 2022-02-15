import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { YouTube } from "@mui/icons-material";

export default function Logo({}: any) {
  return (
    <Typography
      variant="h6"
      color="inherit"
      noWrap
      component={Link}
      to="/"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <YouTube />
    </Typography>
  );
}
