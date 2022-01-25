import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0073D1",
    },
    // secondary: {
    //   main: "#19857b",
    // },
    // error: {
    // main: red.A400,
    // },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    subtitle1: {
      fontSize: "1.875rem",
    },
    subtitle2: {
      fontSize: "1.5rem",
    },
    button: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.875rem",
    },
    overline: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
        sizeLarge: {
          padding: "1rem 2rem",
        },
      },
      defaultProps: {
        disableElevation: true,
        // disableRipple: true,
      },
    },
  },
});

export default theme;
