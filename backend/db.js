const mongoose = require('mongoose');

const mongodbURI = "mongodb+srv://gofood:gofood123@gofood.vreo1.mongodb.net/?retryWrites=true&w=majority&appName=GOFOOD"

const mongodb = () => {

    mongoose.connect(mongodbURI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
}

module.exports = mongodb;