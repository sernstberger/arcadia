import { createTheme, ThemeOptions, Typography } from "@mui/material";
import Listings from "../../components/Listings";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import ListingCard from "../../components/ListingCard";

const themeOverrides: ThemeOptions = {
  palette: {
    primary: {
      main: "#006aff",
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

const Airbnb = () => {
  return (
    <ThemeProvider theme={theme(themeOverrides)}>
      <CssBaseline />

      <Typography>This looks exactly like Airbnb.</Typography>
      <Listings
        CardComponent={ListingCard}
        items={[
          {
            title: "coooooool",
            image:
              "https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80",
            emphasis: "ahhhhh",
            details: "tails",
            href: "/",
            leftAction: "secondary",
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default Airbnb;
