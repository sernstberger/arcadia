import { Grid, Typography } from "@mui/material";
import ListingItem from "../../components/ListingItem";

const Airbnb = () => {
  return (
    <div>
      <Typography>This looks exactly like Airbnb.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ListingItem
            title="title goes here"
            details="details go here"
            image="https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
            href="/"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Airbnb;
