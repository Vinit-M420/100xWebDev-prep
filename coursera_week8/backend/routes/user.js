const express = require('express');
const router = express.Router(); 
const bcrypt = require("bcrypt");
const { UserModel, PurchaseModel, CourseModel } = require("../db");
const { z } = require("zod");
const { userAuth } = require("../middleware/auth")
const jwt = require("jsonwebtoken");

router.use(express.json());

router.post("/signup", async function (req, res) {
    const requiredBody = z.object({ 
            email: z.string().min(3).max(100).email(),
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

    const { email, password, firstName, lastName } = req.body; // decouplin

    let user = await UserModel.findOne({ email: email })
    if (user){
        res.status(403).json({ message: "User is already signed up. Please sign in" })
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        await UserModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
        res.status(200).json({ message: "User created successfully!" })
    }
    catch(error){
        res.status(403).json( {
            message: "Error in signing up the user",
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
        })
        })
        
    
    const parsedBodywithSuccess = requiredBody.safeParse(req.body);
    if (!parsedBodywithSuccess){
        res.status(403).json({ message: 'Incorrect Format', error: parsedBodywithSuccess.error })
        return
    }
    const email = req.body.email;
    const password = req.body.password;

    let user = await UserModel.findOne({ email: email })
    if (!user){
        res.status(403).json({ message: "You are not signed up. Please sign up" })
    }
    
    try{
        const passwordMatch = await bcrypt.compare(password, user.password); 
        if (passwordMatch){
            const token = jwt.sign( {id: user._id.toString( )} , process.env.JWT_USER_SECRET);
            res.json({ token: token });
        }
        else{
            res.status(403).json({ message: "Invalid Password" })
        }

    }
    catch(error){
       res.status(403).json( {
            message: "Error in signing in the user",
            error: error.message
        } ) 
    }
});


router.get("/purchases", async function (req, res) {
    const userId = req.userId;
    const purchases = await PurchaseModel.find({
        userId
    });
    const courseData = await CourseModel.find({
        _id: {$in: purchases.map(p => p.courseId) }
    }) 

    res.json({ purchases, courseData })
});



router.post("/purchase" , async function (req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;
    
    try{
        const course = await CourseModel.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const existingPurchase = await PurchaseModel.findOne({ userId, courseId });
        if (existingPurchase) {
            return res.status(400).json({ message: "You have already purchased this course" });
        }
        else{
        const purchase =  await PurchaseModel.create({ userId , courseId })
        }

    res.json({ message: "You have successfully bought the course",
            purchase,
            course
     })
    }
    catch(error){
        res.status(500).json({ message: "Error purchasing the course", error: error.message });
    }
});



module.exports = router;