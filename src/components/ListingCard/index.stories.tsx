import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListingCard, { ListingCardProps } from ".";
import { Avatar, Chip, Grid, Typography } from "@mui/material";
import { Favorite, PlayArrow, MoreVert } from "@mui/icons-material";

export default {
  title: "Components/ListingCard",
  component: ListingCard,
} as ComponentMeta<typeof ListingCard>;

const Template: ComponentStory<typeof ListingCard> = (
  args: ListingCardProps
) => (
  <Grid container>
    <Grid item xs={12} sm={6} md={4}>
      <ListingCard {...args} />
    </Grid>
  </Grid>
);

export const RealEstate = Template.bind({});
RealEstate.args = {
  // price: 120000,
  // propertyType: "house",
  // beds: 3,
  // baths: 2,
  // rating: { average: 3.4, numberOfReviews: 38 },
  title: "Property Title",
  children: "foooooo",
  // details: <Typography variant="body2">$5000/night</Typography>,
  subtitle: "$5000/night",
  rightAction: <Favorite />,
  // location: "Indianapolis, IN",
  // details:
  //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, explicabo? Ipsam dolorum harum asperiores praesentium quas expedita distinctio at perspiciatis, voluptate saepe vero non temporibus maiores quae consequatur quia quo?",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Youtube = Template.bind({});
Youtube.args = {
  // rating: { average: 3.4, numberOfReviews: 38 },
  title: "Video Title",
  subtitle: <Typography variant="body2">Firething</Typography>,
  details: (
    <Typography variant="body2">1222 views &bull; 5 days ago</Typography>
  ),
  leftAction: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
  rightAction: <MoreVert />,
  // location: "Indianapolis, IN",
  // details:
  //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, explicabo? Ipsam dolorum harum asperiores praesentium quas expedita distinctio at perspiciatis, voluptate saepe vero non temporibus maiores quae consequatur quia quo?",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Netflix = Template.bind({});
Netflix.args = {
  // rating: { average: 3.4, numberOfReviews: 38 },
  title: "Video Title",
  // details: "$5000/night",
  // location: "Indianapolis, IN",
  // details:
  //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, explicabo? Ipsam dolorum harum asperiores praesentium quas expedita distinctio at perspiciatis, voluptate saepe vero non temporibus maiores quae consequatur quia quo?",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Spotify = Template.bind({});
Spotify.args = {
  // rating: { average: 3.4, numberOfReviews: 38 },
  title: "Music Title",
  // details: "$5000/night",
  leftAction: <PlayArrow />,
  subtitle: "2021 • Album",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Amazon = Template.bind({});
Amazon.args = {
  // rating: { average: 3.4, numberOfReviews: 38 },
  emphasis: <Chip label="Best Seller" />,
  title: "Product Title",
  subtitle: "$49.99",
  details: (
    <div>
      <Typography>Prime FREE Delivery by May 1</Typography>
    </div>
  ),
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Etsy = Template.bind({});
Etsy.args = {
  // rating: { average: 3.4, numberOfReviews: 38 },
  title: "Product Title",
  rightAction: <Favorite />,
  subtitle: "$75.00",
  // location: "Indianapolis, IN",
  details: <Typography>NameOfShopHere</Typography>,
  //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, explicabo? Ipsam dolorum harum asperiores praesentium quas expedita distinctio at perspiciatis, voluptate saepe vero non temporibus maiores quae consequatur quia quo?",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Zillow = Template.bind({});
Zillow.args = {
  emphasis: "2 days on Zillow",
  title: "$500,000",
  subtitle: "3 Bedroom, 2 Bathroom, 2,500 sqft - Active",
  details: <Typography>123 Pearl Dr, Austin, TX 78748</Typography>,
  rightAction: <Favorite />,
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Doordash = Template.bind({});
Doordash.args = {
  // rating: { average: 3.4, numberOfReviews: 38 },
  title: "Restaraunt Title",
  // details: "$5000/night",
  // location: "Indianapolis, IN",
  rightAction: <Favorite />,
  subtitle: "41 min • Free delivery over $10",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

export const Hulu = Template.bind({});
Hulu.args = {
  emphasis: <Typography>Episode 2</Typography>,
  title: "Hitchcock & Scully",
  rightAction: <MoreVert />,
  details: (
    <Typography variant="body2">
      Jake and Charles investigate a case of Hitchcock and Scully's from the
      1980s; meanwhile, Amy's uniformed officers and Terry's detectives fight
      over limited resources.
    </Typography>
  ),
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

// export const Favorited = Template.bind({});
// Favorited.args = {
//   price: 120000,
//   favorite: true,
//   propertyType: "house",
//   beds: 3,
//   baths: 2,
//   rating: { average: 3.4, numberOfReviews: 38 },
//   title: "Title goes here",
//   location: "Indianapolis, IN",
//   description:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, explicabo? Ipsam dolorum harum asperiores praesentium quas expedita distinctio at perspiciatis, voluptate saepe vero non temporibus maiores quae consequatur quia quo?",
//   image:
//     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
// };
