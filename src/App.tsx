import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListingItem from "./components/ListingItem";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" gutterBottom>
          Arcadia
        </Typography>
        <Typography>
          Building popular websites using standards-based, accessible React
          tooling.
        </Typography>
        <ul>
          <li>Twitter</li>
          <li>
            <Link to="/airbnb">Airbnb</Link>
          </li>
          <li>Google</li>
          <li>Gmail</li>
          <li>Etsy</li>
          <li>Doordash</li>
          <li>Amazon</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Netflix</li>
          <li>Spotify</li>
          <li>Zillow</li>
          <li>Hulu</li>
        </ul>
        <Typography variant="h2" gutterBottom>
          Technologies
        </Typography>
        <ul>
          <li>React</li>
          <li>Mui</li>
          <li>Typescript</li>
          {/* <li>Jest</li> */}
          {/* <li>Storybook</li> */}
          {/* <li>React Testing Library</li> */}
          <li>React Router</li>
          {/* <li>React Hook Form</li> */}
        </ul>
      </Box>

      <Outlet />
    </Container>
  );
};

export default App;
