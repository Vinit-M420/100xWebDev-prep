const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = 'heheusuckingatcoding'
app.use(express.json());
const path = require('path');

let users = []
let loggedIn = false;

function auth(req,res,next){   
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    if (decodedInfo.username){
        req.username = decodedInfo.username;
        next();
    }
    else{
         res.json({ msg:'You are not logged in'})
    }
}

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/signup', function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    let user = users.find(u => u.username === username && u.password === password);
    
    if (user){
        res.json({ msg: 'You are already signed up'})
    }
    else{
        users.push({ username:username , password:password})
        res.json({ msg: 'You are successfully signed up'})
    }

});


app.post('/signin' ,function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    
    
    let user = users.find(u => u.username === username && u.password === password);

    if (user){
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET) ;
        res.json({ token: token });
        let loggedIn = true;
    }
    else{
        res.status(400).json({ msg: 'Invalid Username Or Password'})
    }

});

app.get('/me', auth , function(req, res) {
    try {
        let founduser = users.find(u => u.username === req.username);

        if (founduser) {
            res.json({
                username: founduser.username,
                password: founduser.password
            });
        } else {
            res.status(401).json({ msg: 'Invalid token' });
        }
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token' });
    }
});

app.listen(3000);