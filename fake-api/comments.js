const faker = require("faker");
const { users } = require("./users");

const comments = (count) =>
  [...Array(count)].map((_, i) => {
    const createDate = faker.date.past();

    return {
      id: i,
      comment: faker.lorem.sentences(),
      user: users[
        faker.datatype.number({
          min: 0,
          max: 499,
        })
      ],
      createDate,
    };
  });

module.exports = { comments };
