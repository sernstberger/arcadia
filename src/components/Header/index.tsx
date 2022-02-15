import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountMenu from "../AccountMenu";
import ConnectedSearch from "../ConnectedForm/ConnectedSearch";
import Logo from "../Logo";
import { YouTube } from "@mui/icons-material";

export default function Header({
  drawerOpen,
  drawerClose,
  position = "static",
}: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        // {...{ position }}
        position="fixed"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            onClick={drawerOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Logo to="/" logo={<YouTube fontSize="large" />} />
          <ConnectedSearch />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
