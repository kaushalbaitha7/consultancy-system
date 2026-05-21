const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    emailVerified: {
        type: Boolean,
        default: false
    },

    whatsappVerified: {
        type: Boolean,
        default: false
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        default: "student"
    },

    personalDetails: {
        fatherName: String,
        motherName: String,
        dob: String,
        address: String,
        neetRoll: String,
        neetRank: String,
        category: String
    }

},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);