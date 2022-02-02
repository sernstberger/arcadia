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
          { title: "Real Estate", href: "/real-estate" },
          { title: "Rental Properties", href: "#" },
          // { title: "Twitter", href: "/twitter" },
          // { title: "GitHub", href: "/github" },
          // { title: "Slack", href: "/slack" },
          // { title: "Facebook", href: "/facebook" },
          // { title: "Instagram", href: "/instagram" },
          // { title: "Google", href: "/google" },
          { title: "Videos", href: "/videos" },
          // { title: "Netflix", href: "/netflix" },
          { title: "Music", href: "#" },
          { title: "Shopping", href: "#" },
          // { title: "Uber", href: "/uber" },
          { title: "Email", href: "#" },
          // { title: "Etsy", href: "/etsy" },
          // { title: "Doordash", href: "/doordash" },
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
        <li>Jest</li>
        <li>Storybook</li>
        <li>React Testing Library</li>
        <li>React Router</li>
        <li>DateFns</li>
        <li>Axios</li>
        <li>json-server</li>
        {/* <li>Redux</li> */}
        {/* <li>React Hook Form</li> */}
      </ul>
    </div>
  );
};

export default Home;
