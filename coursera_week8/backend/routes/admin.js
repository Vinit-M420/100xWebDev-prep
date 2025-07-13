const express = require('express');
const router = express.Router(); 
const bcrypt = require("bcrypt");
const { AdminModel, CourseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { adminAuth } = require("../middleware/auth")

router.use(express.json()); // middleware to parse user's json body

router.post("/signup", async function (req, res) {
    const requiredBody = z.object({ 
        username: z.string().min(3).max(100).email(),
        firstName: z.string().min(3).max(30),
        password: z.string().min(3).max(30).refine((password) => {
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

             return hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter;
        },{
        message: "Password must contain at least one uppercase, lowercase, number, and special character"
    }) ,
    })
    

    const parsedDatawithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDatawithSuccess.success) {
        res.status(403).json({ 
            message: 'Incorrect format',
            error: parsedDatawithSuccess.error
        })
        return
    }

    const { username, password, firstName, lastName } = req.body; // decoupling

    let admin = await AdminModel.findOne({ username: username })
    if (admin){
        res.status(403).json({ message: "Admin is already signed up. Please sign in" })
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        await AdminModel.create({
            username: username,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
        res.status(200).json({ message: "Admin signed up successfully!" })
    }
    catch(error){
        res.status(403).json( {
            message: "Error in signing up the Admin",
            error: error.message
        } )
    }

});


router.post("/signin", async function (req, res) {
    const requiredBody = z.object({ 
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(30).refine((password) => {
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

             return hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter;
        },{
        message: "Password must contain at least one uppercase, lowercase, number, and special character"
    }),
    })
    

    const parsedBodywithSuccess = requiredBody.safeParse(req.body);
    if (!parsedBodywithSuccess){
        res.status(403).json({ message: 'Incorrect Format', error: parsedBodywithSuccess.error })
        return
    }
    const username = req.body.username;
    const password = req.body.password;

    let admin = await AdminModel.findOne({ username: username })
    if (!admin){
        res.status(403).json({ message: "You are not signed up. Please sign up" })
    }
    
    try{
        const passwordMatch = await bcrypt.compare(password, user.password); 
        if (passwordMatch){
            const token = jwt.sign( {id: admin._id.toString( )} , process.env.JWT_ADMIN_SECRET);
            res.json({ token: token });
        }
        else{
            res.status(403).json({ message: "Invalid Password" })
        }

    }
    catch(error){
       res.status(403).json( {
            message: "Error in signing in the admin",
            error: error.message
        } ) 
    }
});

router.use(adminAuth);

router.post("/course", async function (req, res) {
    const adminId = req.adminId;
    const { title, description, imageURL, price } = req.body;

    const course = await CourseModel.create({
        title, description, imageURL, price, adminId
    });

    res.json({ message: "Course Created!", courseId : course._id });
    
});

router.put("/course", async function (req, res) {
    const adminId = req.adminId;
    const { title, description, imageURL, price, courseId } = req.body;

    const course = CourseModel.findOne({ _id: courseId , creatorId: adminId});
    if (!course){
        res.status(403).json({ message: "Invalid course ID given" });
    }

    try{
        await course.updateOne(
            { _id: courseId, creatorId: adminId } ,
            { title, description, imageURL, price }
        );

        res.json({ message: "Course detailed updated", creatorId: adminId })
    }
    catch(error){
        res.status(403).json({ message: "Error in updating the Course details", error: error.message })
    }
    
});

router.get("/course/bulk", async function (req, res) {
    const adminId = req.adminId;
    try{
        const courses = await CourseModel.find({ creatorId: adminId });
        res.json({ courses });
    }
    catch(error){
        res.status(403).json({ message: 'Error in fetching all the courses', error: error.message });
    }
    
});


// router.delete("/course/delete", async function (req, res) {
// });

module.exports = router;