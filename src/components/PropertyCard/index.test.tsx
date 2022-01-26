import React from "react";
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import Fetch from '../fetch'
import PropertyCard from ".";

test("foooooooo", async () => {
  render(
    <PropertyCard
      price={120000}
      propertyType="house"
      beds={3}
      baths={2}
      rating={{ average: 3.4, numberOfReviews: 38 }}
      title="Title goes here"
      location="Indianapolis, IN"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              explicabo? Ipsam dolorum harum asperiores praesentium quas expedita
              distinctio at perspiciatis, voluptate saepe vero non temporibus
              maiores quae consequatur quia quo?"
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    />
  );

  expect(screen).toBeTruthy();
});
