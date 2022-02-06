import { Rating, Typography } from "@mui/material";
import ListingCard from ".";
import { ProductProps } from "../../apps/Store/types";
import { formatMoney } from "../../utils";

const StoreListingCard = ({
  id,
  title,
  image,
  price,
  rating,
}: ProductProps) => {
  return (
    <ListingCard
      title={title}
      image={image}
      details={
        <div>
          <Typography>{formatMoney(price)}</Typography>
          <Rating name="read-only" value={rating} readOnly />

          <Typography>Free shipping</Typography>
        </div>
      }
      href={`/store/${id}`}
    />
  );
};
export default StoreListingCard;
