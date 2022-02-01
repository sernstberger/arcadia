import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import theme from "./theme";
import Airbnb from "./apps/airbnb";
import Home from "./pages/Home";
import Youtube from "./apps/youtube";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="airbnb" element={<Airbnb />}>
            {/* <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          </Route>
          <Route path="youtube" element={<Youtube />}>
            {/* <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);
