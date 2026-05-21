const express = require("express");

const router = express.Router();

const {
    registerUser,
    sendEmailOtp,
    verifyOtp,
    loginUser
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/send-email-otp", sendEmailOtp);

router.post("/verify-otp", verifyOtp);

router.post("/login", loginUser);

module.exports = router;