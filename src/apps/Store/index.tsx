import { Typography } from "@mui/material";
import ListingCard from "../../components/ListingCard";
import Listings from "../../components/Listings";

const Airbnb = () => {
  return (
    <div>
      <Typography>This looks exactly like Airbnb.</Typography>
      <Listings
        CardComponent={ListingCard}
        items={[
          {
            title: "coooooool",
            image:
              "https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80",
            emphasis: "ahhhhh",
            details: "tails",
            href: "/",
            leftAction: "secondary",
          },
        ]}
      />
    </div>
  );
};

export default Airbnb;
