const mongoose = require('mongoose');

const mongodbURI = "mongodb+srv://gofood:gofood123@gofood.vreo1.mongodb.net/gofood?retryWrites=true&w=majority";

const mongodb = async () => {
    try {
        await mongoose.connect(mongodbURI);
        console.log("MongoDB connected successfully");

        const foodItemsCollection = mongoose.connection.db.collection('food_items');

        const data = await foodItemsCollection.find({}).toArray();
        console.log(data);

    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    }
};

module.exports = mongodb;