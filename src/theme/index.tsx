import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";
import { deepmerge } from "@mui/utils";
import baseTheme from "./base";

const theme = (overrides: ThemeOptions) => {
  // return createTheme(deepmerge(baseTheme, overrides));
  return createTheme(baseTheme, overrides);
};

export default theme;
