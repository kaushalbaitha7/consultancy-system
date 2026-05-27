const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

{

    /* =========================
       AUTH DETAILS
    ========================= */

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



    /* =========================
       VERIFICATION
    ========================= */

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



    /* =========================
       ROLE
    ========================= */

    role: {

        type: String,

        default: "student"
    },



    /* =========================
       PERSONAL DETAILS
    ========================= */

    personalDetails: {

        neetRollNo: String,

        neetApplicationNo: String,

        allIndiaRank: String,

        candidateName: String,

        fatherName: String,

        motherName: String,

        dob: String,

        category: String,

        disabledQuota: String,

        neetMobile: String,

        alternativeMobile: String,

        neetEmail: String,

        identificationMark: String,

        domicileState: String,

        nriQuota: String,

        nationality: String,

        religion: String,

        aadharNumber: String,

        motherTongue: String
    },



    /* =========================
       EDUCATIONAL DETAILS
    ========================= */

    educationalDetails: {

    tenth: {

        seatNo: String,

        percentage: String,

        schoolName: String,

        schoolAddress: String,

        board: String,

        collegeType: String,

        passedYear: String

    },



    twelfth: {

        seatNo: String,

        percentage: String,



        pcbMarks: {

            physics: String,

            chemistry: String,

            biology: String,

            pcbPercentage: String

        },



        schoolName: String,

        schoolAddress: String,

        board: String,

        collegeType: String,

        passedYear: String

    }

},


    /* =========================
       ADDRESS DETAILS
    ========================= */

    addressDetails: {

        houseNo: String,

        colony: String,

        locality: String,

        country: String,

        state: String,

        district: String,

        pinCode: String,

        policeStation: String
    },



    /* =========================
       BANK DETAILS
    ========================= */

    bankDetails: {

        bankName: String,

        branchName: String,

        accountHolderName: String,

        accountNumber: String,

        ifscCode: String
    },



    /* =========================
       COUNSELLING DETAILS
    ========================= */

    counsellingDetails: {

        preferredCourse: String,

        preferredStates: [String],

        budget: String
    },



    /* =========================
       DOCUMENTS
    ========================= */

    documents: {

        photo: String,

        neetScorecard: String,

        neetAdmitCard: String,

        hindiSignature: String,

        englishSignature: String,

        thumb: String,

        casteCertificate: String,

        domicileCertificate: String,

        passbookCheque: String,

        tenthScorecard: String,

        tenthCertificate: String,

        tenthStudyCertificate: String,

        tenthTcLc: String,

        tenthCharacterCertificate: String,

        tenthMigrationCertificate: String,

        twelfthScorecard: String,

        twelfthCertificate: String,

        twelfthStudyCertificate: String,

        twelfthTcLc: String,

        twelfthCharacterCertificate: String,

        twelfthMigrationCertificate: String
    },



    /* =========================
       APPLICATION STATUS
    ========================= */

    applicationStatus: {

        type: String,

        default: "Incomplete"
    },

    counsellingStatus: {

        type: String,

        default: "Not Started"
    },

    allotmentStatus: {

        type: String,

        default: "Pending"
    }

},

{

    timestamps: true

}

);

module.exports =
mongoose.model("User", userSchema);