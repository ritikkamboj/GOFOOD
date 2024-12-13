const express = require("express");
const router = express.Router();

router.post('/allData', (req, res) => {
    try {
        res.status(200).json([global.food_items, global.food_categories]);

    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })

    }
});


module.exports = router;



