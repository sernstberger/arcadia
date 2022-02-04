const faker = require("faker");

const users = [...Array(500)].map((_, i) => {
  return {
    id: i,
    name: faker.internet.userName(),
    avatar: faker.image.imageUrl(),
  };
});

module.exports = { users };
