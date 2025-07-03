const express = require('express');
const app = express();

app.use(express.json());

function middleware(req,res,next){
    // log the method, timestamp and the url
    console.log(`The method used is ${req.method}`);
    console.log("The url is" + req.hostname );
    console.log(new Date());
    next();
}

app.use(middleware);

app.get("/add", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let product =  a + b;
    res.send(`Result is ${product}`)
});

app.get("/multiply", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    res.json({ result: a*b })
});

app.get("/divide", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let product =  a / b;
    res.send(`Result is ${product}`)

});

app.get("/subtract", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let product =  a - b;
    res.send(`Result is ${product}`)
});

app.listen(3000);
