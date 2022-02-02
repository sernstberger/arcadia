import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import theme from "./theme";
import RealEstate from "./apps/RealEstate";
import Home from "./pages/Home";
import Video from "./apps/Video";
import Single from "./apps/Video/Single";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="real-estate" element={<RealEstate />}>
            {/* <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          </Route>
          {/* <Route path="videos" element={<Video />}> */}
          <Route path="videos">
            <Route path=":id" element={<Single />} />
            {/* <Route path="new" element={<NewTeamForm />} /> */}
            <Route index element={<Video />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);
