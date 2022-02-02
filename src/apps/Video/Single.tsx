import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { VideoProps } from "./types";
import { useParams } from "react-router-dom";

const Single = () => {
  const [video, setVideo] = useState<VideoProps>();
  const { id } = useParams();
  console.log("id", id);
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
          This looks exactly like Video.
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
              <Grid item xs={12} sm={9}>
                <Typography variant="h1">{video.title}</Typography>
                <Stack direction="row">
                  {video.views} views /date
                  <div>
                    <Button>gooooo</Button>
                    <Button>gooooo</Button>
                    <Button>gooooo</Button>
                    <Button>gooooo</Button>
                  </div>
                </Stack>
                <Divider />
                <Stack direction="row">
                  <Avatar src={video.user.avatar} />
                  <div>
                    <Stack direction="row">
                      {video.user.name}

                      <div>
                        {video.subscribed ? (
                          <Button variant="outlined">Subscribed</Button>
                        ) : (
                          <Button variant="contained" color="primary">
                            Subscribe
                          </Button>
                        )}

                        <Button>Bell</Button>
                      </div>
                    </Stack>
                    details
                  </div>
                </Stack>
                <Divider />
                comments
              </Grid>
              <Grid item xs={12} sm={3}>
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
