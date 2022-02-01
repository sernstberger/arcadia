import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import ListingCard, { ListingCardProps } from "../ListingCard";

export interface ListingsProps {
  items: ListingCardProps[];
  listingsPerPage?: number;
}
const Listings = ({ items, listingsPerPage = 3 }: ListingsProps) => {
  const numberOfPages = items.length / listingsPerPage;
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
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={listing.title}>
              <ListingCard {...listing} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination count={numberOfPages} page={page} onChange={handleChange} />
    </>
  );
};

export default Listings;
