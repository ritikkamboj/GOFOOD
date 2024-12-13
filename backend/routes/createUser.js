const express = require("express");

const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const jwtSecret = "jaishreeram#123"
router.post(
    "/createUser",
    body("email").isEmail(),
    body("password", "Password is not of required length").isLength({ min: 5 }),
    body("name").isLength({ min: 5 }),



    async (req, res) => {

        let salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

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
                password: secPassword,
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


router.post(
    "/loginuser",
    body("email").isEmail(),
    // body("password", "Password is not of required length").isLength({ min: 5 }),
    // body("name").isLength({ min: 5 }),

    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: error.array(),
            });
        }
        let email = req.body.email;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    error: 'use Correct login credentials 1 '
                })
            }

            let pwCompare = await bcrypt.compare(req.body.password, user.password)

            if (!(pwCompare)) {
                return res.status(400).json({
                    error: 'use Correct login credentials 2 '
                })
            }
            const data = {
                user: {
                    id: user._id
                }
            }

            const authToken = jwt.sign(data, jwtSecret);

            res.json({
                success: true,
                token: authToken
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
