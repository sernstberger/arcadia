const faker = require("faker");
const { users } = require("./users");

const comments = (count, isReply = false) =>
  [...Array(count)].map((_, i) => {
    const createDate = faker.date.past();
    const hasReplies = faker.datatype.boolean();
    const numberOfReplies = hasReplies
      ? faker.datatype.number({ min: 1, max: 20 })
      : 0;

    return {
      id: i,
      comment: faker.lorem.sentences(),
      user: users[
        faker.datatype.number({
          min: 0,
          max: 49,
        })
      ],
      createDate,
      isReply,
      upvoteCount: faker.datatype.boolean()
        ? faker.datatype.number({ min: 0, max: 1000 })
        : 0,
      replies: isReply ? undefined : comments(numberOfReplies, true),
    };
  });

module.exports = { comments };
