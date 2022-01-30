import * as React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div>
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
        <li>Wikipedia</li>
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
    </div>
  );
};

export default Home;
