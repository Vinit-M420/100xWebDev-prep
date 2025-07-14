const express = require('express');
const router = express.Router(); 
const { userAuth } = require("../middleware/auth")
const { PurchaseModel, CourseModel } = require("../db");

router.use(express.json());


router.get("/preview", async function (req, res) {
    const courses = await CourseModel.find({});

    return res.json({ courses }) ;
});



module.exports = router;