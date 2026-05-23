require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");



/* =========================
   ROUTES
========================= */

const authRoutes =
require("./routes/authRoutes");

const studentRoutes =
require("./routes/studentRoutes");



/* =========================
   APP INIT
========================= */

const app = express();



/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());



/* =========================
   API ROUTES
========================= */

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/student",
    studentRoutes
);



/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {

    res.send(
        "Consultancy Server Running"
    );

});



/* =========================
   DATABASE CONNECTION
========================= */

mongoose.connect(

    process.env.MONGO_URI,

    {

        useNewUrlParser: true,

        useUnifiedTopology: true

    }

)

.then(() => {

    console.log(
        "MongoDB Connected"
    );



    /* =========================
       SERVER START
    ========================= */

    const PORT =
    process.env.PORT || 5000;

    app.listen(PORT, () => {

        console.log(

            `Server running on port ${PORT}`

        );

    });

})

.catch((error) => {

    console.log(

        "MongoDB Connection Error:",

        error

    );

});