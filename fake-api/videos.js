const faker = require("faker");

const videos = [...Array(50)].map((_, i) => {
  const id = i;
  const title = faker.name.firstName();
  const image =
    "https://images.unsplash.com/photo-1643061493163-e50ef8dec4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80";
  const user = "tails";
  const createDate = faker.date.recent();
  const updateDate = faker.date.recent();
  // const sessionCount = faker.random.number({
  //   min: 0,
  //   max: 5
  // })
  // const sessionCount = 1

  return {
    id,
    title,
    image,
    user,
    createDate,
    updateDate,
  };
});

module.exports = { videos };
