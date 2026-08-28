require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


/* =========================================================
   ROUTES
========================================================= */

const authRoutes =
    require("./routes/authRoutes");

const studentRoutes =
    require("./routes/studentRoutes");

const aiRoutes =
    require("./routes/aiRoutes");


/* =========================================================
   APP
========================================================= */

const app = express();


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(cors());

app.use(express.json());


/* =========================================================
   TEST ROUTE
========================================================= */

app.get("/", (req, res) => {

    res.send(
        "Consultancy Server Running"
    );

});


/* =========================================================
   API ROUTES
========================================================= */

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/student",
    studentRoutes
);

app.use(
    "/api/ai",
    aiRoutes
);


/* =========================================================
   DATABASE CONNECTION
========================================================= */

mongoose.connect(
    process.env.MONGO_URI
)

.then(() => {

    console.log(
        "MongoDB Connected"
    );


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
        "MongoDB Error:",
        error
    );

});