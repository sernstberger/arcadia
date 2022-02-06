import { ThemeOptions } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

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
          borderRadius: 2,
        },
      },
    },
  },
};

const Video = () => {
  return (
    <ThemeProvider theme={theme(themeOverrides)}>
      <CssBaseline />
      <Header position="fixed" />
      <Outlet />
    </ThemeProvider>
  );
};

export default Video;
