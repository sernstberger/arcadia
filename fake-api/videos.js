const faker = require("faker");
const { comments } = require("./comments");

const videos = [...Array(500)].map((_, i) => {
  const image =
    "https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80";
  const user = {
    id: 1,
    name: faker.internet.userName(),
    avatar: faker.image.imageUrl(),
  };
  const createDate = faker.date.past();
  const updateDate = faker.date.recent();
  const views = faker.random.number();
  const subscribed = faker.random.boolean();
  // const sessionCount = faker.random.number({
  //   min: 0,
  //   max: 5
  // })
  // const sessionCount = 1

  return {
    id: i,
    title: faker.lorem.sentence(),
    image,
    user,
    views,
    createDate,
    updateDate,
    subscribed,
    comments: comments(
      faker.random.boolean()
        ? faker.datatype.number({
            min: 0,
            max: 50,
          })
        : 0
    ),
  };
});

module.exports = { videos };
