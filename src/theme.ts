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
