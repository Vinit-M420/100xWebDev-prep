const express = require('express');
const app = express();

function isOldEnough(age){
    if (age > 14){
        return true;
    }
    else{
        return false;
    }
}

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if (age > 14){
        next();
    }
    else{
        res.json({
        msg:'Sorry for the ride you need to be above 14 years'
    })
    }
}

// app.use(isOldEnoughMiddleware);
// call or use this middleware before anything that comes below it

app.get('/ride1', isOldEnoughMiddleware, function (req,res) {
        res.json({
        msg:'You have successfully ridden the ride 1'
    })
    
} );

app.get('/ride2', isOldEnoughMiddleware, function (req,res) {
        res.json({
        msg:'You have successfully ridden the ride 2'
    })
    
} );

app.listen(3000);