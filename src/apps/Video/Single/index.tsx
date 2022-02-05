import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { VideoProps } from "../types";
import { useParams } from "react-router-dom";
import Comment from "../../../components/Comment";
import { CommentProps } from "../../../components/Comment/types";
import Rating from "../../../components/Rating";
import { MoreHoriz, Notifications } from "@mui/icons-material";
import VideoInfo from "./VideoInfo";

const Single = () => {
  const [video, setVideo] = useState<VideoProps>();
  const { id } = useParams();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videos/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setVideo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div>
      {video ? (
        <div>
          This looks exactly like YouTube.
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // maxHeight: "calc(100vh - 169px)", // TODO: make video height responsive
              }}
              // src={`https://www.youtube.com/embed/${youtubeId}`}
              src="https://www.youtube.com/embed/-MTSQjw5DrM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Box padding={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <VideoInfo {...video} />
                {video.comments?.length ? (
                  video.comments.map((comment: CommentProps) => {
                    return (
                      <Comment
                        key={comment.createDate}
                        {...comment}
                        upvoteEnabled
                        downvoteEnabled
                      />
                    );
                  })
                ) : (
                  <>
                    <Typography>0 comments</Typography>
                    add comment here
                  </>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                adfasdf
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : (
        <div>Nope</div>
      )}
    </div>
  );
};

export default Single;
