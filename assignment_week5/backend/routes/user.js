const express = require('express');
const router = express.Router(); 
const { UserModel } = require("../db");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
require('dotenv').config()

router.use(express.json());

router.post("/signup", async function (req,res) {
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

    const parsedDatawithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDatawithSuccess.success) {
        res.status(403).json({ 
            message: 'Incorrect format',
            error: parsedDatawithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    //let errorThrown = false;

    const user = await UserModel.findOne({ email: email });
    if (user){
        return res.status(403).json({ message: "User already exists. You can signin now" })
    }
    try{
        const hashedPassword = await bcrypt.hash(password,5);
        await UserModel.create({
            email: email,
            password: hashedPassword
        });

        	

    } catch(err){
        console.log(err);
        res.status(403).json({ message: "Error in creating the user", error: err.message })
    }

});

router.post("/signin", async function (req,res) {
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

    const parsedDatawithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDatawithSuccess.success) {
        res.status(403).json({ 
            message: 'Incorrect format',
            error: parsedDatawithSuccess.error
        })
        return
    }
    
    const email = req.body.email;
    const password = req.body.password;
    const user = await UserModel.findOne({ email: email });

    if (!user){
        res.status(403).json({ message: "User is not signed up" })
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.password);  
        if (passwordMatch){
            const token = jwt.sign({ id : user._id.toString() }, process.env.JWT_SECRET)
            res.json({ token: token })
        }
        else{
            res.status(403).json( { message: "Invalid Password" })
        }
    } catch(e){
        res.status(403).json({ error: "Invalid credentials"})
        console.log(e);
    }
    
});

module.exports = router;