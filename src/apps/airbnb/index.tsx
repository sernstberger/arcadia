import { Typography } from "@mui/material";
import Listings from "../../components/Listings";

const Airbnb = () => {
  return (
    <div>
      <Typography>This looks exactly like Airbnb.</Typography>
      <Listings listingItems={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
    </div>
  );
};

export default Airbnb;
