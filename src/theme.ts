import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0073D1",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
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
      textTransform: "none",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.875rem",
    },
    overline: {
      fontSize: "0.875rem",
    },

    // TODO consider adding card title to typography
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
        sizeMedium: {
          padding: "0.5rem 1.5rem",
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
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        focusHighlight: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
});

export default theme;
