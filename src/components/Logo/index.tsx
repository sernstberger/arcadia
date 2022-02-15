import * as React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

interface LogoProps {
  to: string;
  logo: React.ReactNode;
}

const Logo = ({ to, logo }: LogoProps) => {
  return (
    <Box
      {...{ to }}
      color="inherit"
      component={Link}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      {logo}
    </Box>
  );
};

export default Logo;
