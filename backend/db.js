const mongoose = require('mongoose');

const mongodbURI = "mongodb+srv://gofood:gofood123@gofood.vreo1.mongodb.net/gofood?retryWrites=true&w=majority";

const mongodb = async () => {
    try {
        await mongoose.connect(mongodbURI);
        console.log("MongoDB connected successfully");

        const foodItemsCollection = mongoose.connection.db.collection('food_items');

        const data1 = await foodItemsCollection.find({}).toArray();
        global.food_items = data1;

        const foodCategoriesCollection = mongoose.connection.db.collection("food_category");
        const data2 = await foodCategoriesCollection.find({}).toArray();
        global.food_categories = data2;


    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    }
};

module.exports = mongodb;