const faker = require("faker");
const { comments } = require("./comments");

const products = [...Array(500)].map((_, i) => {
  const createDate = faker.date.past();
  const updateDate = faker.date.recent();
  const price = faker.datatype.number();

  return {
    id: i,
    title: faker.lorem.sentence(),
    image:
      "https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80",
    price,
    createDate,
    updateDate,
    rating: faker.random.number({ min: 1, max: 5 }),
    description: faker.lorem.paragraphs(),
    comments: comments(
      faker.datatype.boolean()
        ? faker.datatype.number({
            min: 0,
            max: 50,
          })
        : 0
    ),
  };
});

module.exports = { products };
