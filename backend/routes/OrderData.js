const express = require("express");
const Orders = require("../models/Orders");
const router = express.Router();

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    console.log(data)

    data.splice(0, 0, { order_data: req.body.order_date })
    console.log("jai baabe ki  ....." + data)

    let eID = await Orders.findOne({ 'email': req.body.email })

    console.log(eID)
    if (eID === null) {
        try {
            await Orders.create({
                email: req.body.email,
                order_data: [data]
            }).then((res) => res.json({ success: true }))
        }
        catch (err) {
            console.log(err.message);
            res.send({ success: false, message1: err.message })
        }
    }
    else {
        try {
            await Orders.findOneAndUpdate({ "email": req.body.email }, { $push: { order_data: data } }).then(() => res.json({ success: true }))
        }
        catch (err) {
            res.send({ success: false, message2: err.message })
        }
    }
});


module.exports = router;



