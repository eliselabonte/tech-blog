const { User } = require('../models');

const users = [{
        "username": "larryTheFableGuy",
        "email": "newcoder@gmail.com",
        "password": "password12345"
    },
    {
        "username": "francine_the_sheep",
        "email": "frankieWool77@yahoo.com",
        "password": "password12345"
    },
    {
        "username": "snakeInMyB00t",
        "email": "woodynbuzz@toy.gov",
        "password": "password12345"
    },
    {
        "username": "sore_bae",
        "email": "gelatoelgato@gmail.com",
        "password": "password12345"
    },
    {
        "username": "javai$lyfe",
        "email": "coffeeandcode@mailinator.com",
        "password": "password12345"
    },
    {
        "username": "definitely_not_a_cop",
        "email": "plzoffermedrugs@gmail.com",
        "password": "password12345"
    }
];

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;