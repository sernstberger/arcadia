const faker = require("faker");
const { videos } = require("./videos");
const { products } = require("./products");

module.exports = () => {
  return {
    videos,
    products,
  };
};
