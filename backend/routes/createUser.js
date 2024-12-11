const express = require('express');

const router = express.Router();

const User = require("../models/User")
router.post("/createUser", async (req, res) => {

    try {
        await User.create({
            name: "ritik",
            password: "1234",
            email: "ritik@gmail.com",
            location: "beyond_universe"
        })

        res.json({
            success: true
        })

    }
    catch (err) {
        console.log(err)
        res.json({
            success: false
        })

    }


});
module.exports = router;