import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { VideoProps } from "../types";
import Rating from "../../../components/Rating";
import { MoreHoriz, Notifications } from "@mui/icons-material";
import { format, parseISO } from "date-fns";

const VideoInfo = ({
  title,
  views,
  user,
  description,
  subscribed,
  createDate,
}: VideoProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>
          {views} views &bull; {format(parseISO(createDate), "MMM d, yyyy")}
        </Typography>
        <Stack direction="row">
          <Rating
            // {...{ upvoteEnabled, downvoteEnabled, rating, setRating }}
            upvoteEnabled
            downvoteEnabled
            rating={null}
            setRating={() => {}}
          />
          <Button>Share</Button>
          <Button>Save</Button>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHoriz />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Report</MenuItem>
            <MenuItem onClick={handleClose}>Open transcript</MenuItem>
          </Menu>
        </Stack>
      </Stack>
      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={user.avatar} sx={{ width: 48, height: 48 }} />
        <Stack flex={1}>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography>
                <strong>{user.name}</strong>
              </Typography>
              <Typography variant="body2">1.09M subscribers</Typography>
            </div>

            <div>
              {subscribed ? (
                <>
                  <Button variant="outlined">Subscribed</Button>
                  <IconButton>
                    <Notifications />
                  </IconButton>
                </>
              ) : (
                <Button variant="contained" color="primary">
                  Subscribe
                </Button>
              )}
            </div>
          </Stack>
        </Stack>
      </Stack>
      <Box paddingLeft={8} paddingTop={2}>
        {description}
      </Box>
      <Divider />
    </Box>
  );
};

export default VideoInfo;
