import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RealEstateCard from "./components/RealEstateCard";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" gutterBottom>
          Arcadia
        </Typography>
        <RealEstateCard
          price={120000}
          title="Title goes here"
          location="Indianapolis, IN"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            explicabo? Ipsam dolorum harum asperiores praesentium quas expedita
            distinctio at perspiciatis, voluptate saepe vero non temporibus
            maiores quae consequatur quia quo?"
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        />
      </Box>
      <Typography variant="h1">heading1 typography</Typography>
      <Typography variant="h2">heading2 typography</Typography>
      <Typography variant="h3">heading3 typography</Typography>
      <Typography variant="h4">heading4 typography</Typography>
      <Typography variant="h5">heading5 typography</Typography>
      <Typography variant="h6">heading6 typography</Typography>
      <Typography variant="subtitle1">subtitle1 typography</Typography>
      <Typography variant="subtitle2">subtitle2 typography</Typography>
      <Typography variant="body1">body1 typography</Typography>
      <Typography variant="body2">body2 typography</Typography>
      <Typography variant="caption">caption typography</Typography>
      <Typography variant="button">button typography</Typography>
      <Typography variant="overline">overline typography</Typography>
    </Container>
  );
};

export default App;
