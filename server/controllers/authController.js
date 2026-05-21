const User = require("../models/User");
const Otp = require("../models/Otp");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



// REGISTER USER
exports.registerUser = async (req, res) => {

    try {

        const {
            fullName,
            email,
            phone,
            password
        } = req.body;

        // CHECK EXISTING USER
        const existingUser = await User.findOne({

            $or: [
                { email },
                { phone }
            ]

        });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        // HASH PASSWORD
        const hashedPassword =
            await bcrypt.hash(password, 10);

        // CREATE USER
        const user = await User.create({

            fullName,
            email,
            phone,

            password: hashedPassword,

            emailVerified: true,

            isVerified: true

        });

        res.status(201).json({

            message: "User Registered Successfully",

            user

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};



// TEMPORARY OTP BYPASS
exports.sendEmailOtp = async (req, res) => {

    try {

        res.json({
            message: "OTP Bypassed Temporarily"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};



// VERIFY OTP
exports.verifyOtp = async (req, res) => {

    try {

        const { email, otp } = req.body;

        const validOtp =
            await Otp.findOne({
                email,
                otp
            });

        if (!validOtp) {

            return res.status(400).json({
                message: "Invalid OTP"
            });

        }

        if (validOtp.expiresAt < new Date()) {

            return res.status(400).json({
                message: "OTP Expired"
            });

        }

        await User.findOneAndUpdate(

            { email },

            {
                emailVerified: true,
                isVerified: true
            }

        );

        res.json({
            message: "OTP Verified"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};



// LOGIN USER
exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // FIND USER
        const user =
            await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "User not found"
            });

        }

        // CHECK VERIFIED
        if (!user.isVerified) {

            return res.status(400).json({
                message: "Please verify account"
            });

        }

        // CHECK PASSWORD
        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        // GENERATE JWT
        const token = jwt.sign(

            {
                id: user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "7d"
            }

        );

        res.json({

            message: "Login Success",

            token,

            user

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};