module.exports = function () {
    let faker = require("faker");
    let _ = require("lodash");

    const getRandomId = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    return {
        users: _.times(25, function (n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                email: faker.internet.email(),
                avatar: faker.internet.avatar()
            }
        }),
        posts: _.times(50, function (n) {
            return {
                id: n + 1,
                image: faker.image.imageUrl(),
                date: faker.date.past(),
                title: faker.lorem.sentence(),
                summary: faker.lorem.paragraph(),
                description: faker.lorem.paragraphs(10),
                likes: getRandomId(100),
                comments: getRandomId(25),
                userId: getRandomId(25)
            }
        }),
        comments: _.times(200, function (n) {
            return {
                id: n + 1,
                date: faker.date.past(),
                comment: faker.lorem.paragraph(),                
                postId: getRandomId(50),
                userId: getRandomId(25)
            }
        })
    }
}