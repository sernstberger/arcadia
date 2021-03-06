const faker = require("faker");

const users = [...Array(50)].map((_, i) => {
  return {
    id: i,
    name: faker.internet.userName(),
    avatar: faker.image.imageUrl(),
  };
});

module.exports = { users };
