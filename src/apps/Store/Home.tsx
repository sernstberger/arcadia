import { useEffect, useState } from "react";
import axios from "axios";
import Listings from "../../components/Listings";
import StoreListingCard from "../../components/ListingCard/StoreListingCard";
import { Grid } from "@mui/material";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
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
    <Grid container>
      <Grid item xs={3} xl={2}>
        sidebar
      </Grid>
      <Grid item xs={9} xl={10}>
        <Listings items={items} CardComponent={StoreListingCard} />
      </Grid>
    </Grid>
  );
};

export default Home;
