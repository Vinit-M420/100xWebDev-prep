const jwt = require("jsonwebtoken");
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;


function auth(req,res,next){   
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ msg: 'No token provided' });
    }
    try{
    const decodedInfo = jwt.verify(token, JWT_SECRET);
        req.userId = decodedInfo.id;
        next();
    }
    catch(error) {
         res.status(401).json({ msg:'Invalid Token'})
    }
}

module.exports = { auth };