import { useEffect, useState } from "react";
import axios from "axios";
import Listings from "../../components/Listings";
import VideoListingCard from "../../components/ListingCard/VideoListingCard";

const Home = () => {
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
      <Listings items={items} CardComponent={VideoListingCard} />
    </div>
  );
};

export default Home;
