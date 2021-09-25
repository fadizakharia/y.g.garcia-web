import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#223033",
    },
    secondary: {
      main: "#ffffff",
      dark: "#000000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontFamily: "Porcelain",
    },
    h2: {
      fontFamily: "Porcelain",
    },
    h3: {
      fontFamily: "Porcelain",
    },
    h4: {
      fontFamily: "Porcelain",
    },
    h5: {
      fontFamily: "Porcelain",
    },
    h6: {
      fontFamily: "Porcelain",
    },
    subtitle1: { fontFamily: "Porcelain" },
    subtitle2: { fontFamily: "Roboto" },
  },
});

export default theme;
