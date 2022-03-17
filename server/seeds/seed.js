const db = require('../config/connection');
const { Post, User } = require('../models');
const userSeed = require('./userSeed.json');

db.once('open', async () => {
    try {
        await Profile.deleteMany({});
        await Profile.create(userSeed);

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
