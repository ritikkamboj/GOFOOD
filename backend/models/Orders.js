const mongoose = require('mongoose');

// const { Schema } = new Schema

const OrderSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data:
    {
        type: Array,
        required: true
    }

})
module.exports = mongoose.model('order', OrderSchema)