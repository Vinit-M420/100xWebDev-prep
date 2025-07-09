const express = require('express');
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'ilovepaintball'
const { UserModel, TodoModel } = require("./db");
const mongoose  = require('mongoose');
const app = express();
require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URI);

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});



app.post("/login", async function(req,res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if (user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.json({ token: token})
    }
    else{
        res.status(403).json({ error: "You are not signed up"})
    }

});


function auth(req,res,next){
    const token = req.headers.token;
    const decodeData = jwt.verify(token, JWT_SECRET);
    if (decodeData){
        req.userId = decodeData.id;
        next();
    }
    else {
        res.status(403).json({ error: "Invalid Credentials" })
    }
}

app.post("/todo", auth,  async function(req,res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todo", auth, async function(req,res) {
    const userId = req.userId;

    const user = await TodoModel.find({ userId });

    res.json({
        user    
    })
});

app.listen(3000);

