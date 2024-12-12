const express = require("express");

const { body, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../models/User");
router.post(
    "/createUser",
    body("email").isEmail(),
    body("password", "Password is not of required length").isLength({ min: 5 }),
    body("name").isLength({ min: 5 }),

    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: error.array(),
            });
        }

        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            });

            res.json({
                success: true,
            });
        } catch (err) {
            console.log(err);
            res.json({
                success: false,
            });
        }
    }
);
module.exports = router;
