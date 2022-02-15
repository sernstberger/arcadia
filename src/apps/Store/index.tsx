import { ThemeOptions } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuContent from "./MenuContent";

const themeOverrides: ThemeOptions = {
  palette: {
    primary: {
      main: "#7F187F",
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

const Store = () => {
  return (
    <ThemeProvider theme={theme(themeOverrides)}>
      <CssBaseline />
      <Layout menuContent={<MenuContent />}>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
};

export default Store;
