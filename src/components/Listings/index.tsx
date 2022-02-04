import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import ListingCard, { ListingCardProps } from "../ListingCard";
import VideoListingCard from "../ListingCard/VideoListingCard";

export interface ListingsProps {
  items: ListingCardProps[];
  CardComponent: any;
  listingsPerPage?: number;
}
const Listings = ({
  items,
  listingsPerPage = 24,
  CardComponent,
}: ListingsProps) => {
  const numberOfPages = Math.ceil(items.length / listingsPerPage);
  const initialItems = items.slice(0, listingsPerPage);
  const [shownItems, setShownItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const start = (page - 1) * listingsPerPage;
    const end = page * listingsPerPage;
    setShownItems(items.slice(start, end));
  }, [page, listingsPerPage, items]);
  console.log("***", initialItems);
  return (
    <>
      <Grid container spacing={3}>
        {shownItems.map((listing: any) => {
          // TODO: fix any type
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={listing.title}>
              <CardComponent {...listing} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination count={numberOfPages} page={page} onChange={handleChange} />
    </>
  );
};

export default Listings;
