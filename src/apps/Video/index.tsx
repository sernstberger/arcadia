import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import Listings from "../../components/Listings";

const Video = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/videos")
      .then(function (response) {
        // handle success
        console.log(response);
        setItems(response.data);
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
      <Typography>This looks exactly like Video.</Typography>
      <Listings items={items} />
    </div>
  );
};

export default Video;
