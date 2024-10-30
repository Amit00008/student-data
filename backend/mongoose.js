const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoconnect = () => {
    mongoose.connect(process.env.uri)
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch((err) => {
            console.log(err);

        })
}

module.exports = { mongoconnect };