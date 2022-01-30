import { Grid, Pagination, Typography } from "@mui/material";
import ListingItem from "../../components/ListingItem";

const Listings = ({ listingItems }: any) => {
  return (
    <>
      <Grid container spacing={3}>
        {listingItems.map((listing: any) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ListingItem
                key={listing}
                title="title goes here"
                details="details go here"
                image="https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
                href="/"
              />
            </Grid>
          );
        })}
      </Grid>
      <Pagination count={10} />
    </>
  );
};

export default Listings;
