const express = require('express');
const router = express.Router(); 
const bcrypt = require("bcrypt");
const { UserModel } = require("../db");
const { zod } = require("zod");
router.use(express.json());


router.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let user = await UserModel.findOne({ username: username })
    if (user){
        res.status(403).json({ message: "User is already signed up. Please sign in" })
    }
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        await UserModel.create({
            username: username,
            password: hashedPassword
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
    const username = req.body.username;
    const password = req.body.password;

    let user = await UserModel.findOne({ username: username })
    if (!user){
        res.status(403).json({ message: "You are not signed up. Please sign up" })
    }
    
    try{
        const passwordMatch = await bcrypt.compare(password, user.password); 
        if (passwordMatch){
            const token = jwt.sign( {id: user._id.toString( )} , process.env.SECRET);
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


module.exports = router;