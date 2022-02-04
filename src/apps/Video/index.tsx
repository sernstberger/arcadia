import { useEffect, useState } from "react";
import axios from "axios";
import Listings from "../../components/Listings";
import { createTheme, ThemeOptions, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { Outlet } from "react-router-dom";

const themeOverrides: ThemeOptions = {
  palette: {
    primary: {
      main: "#c00",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
};

const Video = () => {
  return (
    <ThemeProvider theme={theme(themeOverrides)}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};

export default Video;
