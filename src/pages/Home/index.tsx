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
        {[
          { title: "Airbnb", href: "/airbnb" },
          // { title: "Twitter", href: "/twitter" },
          // { title: "GitHub", href: "/github" },
          // { title: "Slack", href: "/slack" },
          // { title: "Facebook", href: "/facebook" },
          // { title: "Instagram", href: "/instagram" },
          // { title: "Google", href: "/google" },
          { title: "Youtube", href: "/youtube" },
          // { title: "Netflix", href: "/netflix" },
          // { title: "Spotify", href: "/spotify" },
          // { title: "Amazon", href: "/amazon" },
          // { title: "Uber", href: "/uber" },
          // { title: "Netflix", href: "/netflix" },
          // { title: "Spotify", href: "/spotify" },
          // { title: "Gmail", href: "/gmail" },
          // { title: "Etsy", href: "/etsy" },
          // { title: "Doordash", href: "/doordash" },
          // { title: "Netflix", href: "/netflix" },
          // { title: "Zillow", href: "/zillow" },
          // { title: "Hulu", href: "/hulu" },
          // { title: "Wikipedia", href: "/wikipedia" },
          // { title: "Reddit", href: "/reddit" },
        ].map(({ title, href }) => {
          return (
            <li key={title}>
              <Link to={href}>{title}</Link>
            </li>
          );
        })}
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
