const jwt = require("jsonwebtoken");
require('dotenv').config()
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

function userAuth(req,res,next){
    const authHeader = req.headers.authorization;

    try{
        const token = authHeader; //.split(" ")[1]
        jwt.verify( token, JWT_USER_SECRET, (err, user) => {
            if (err){
                res.status(403).json({ message: "Forbidden: Invalid User" })
            }
            req.userId = user.id;
            next();
        } );
    }
    catch (error){
        console.log("No Authorization header provided"); 
        res.status(401).json({ message: 'Unauthorized: No token provided', error: error.message });
    }
}


function adminAuth(req,res,next){
    const authHeader = req.headers.authorization;
      try{
        const token = authHeader; //.split(" ")[1]
        jwt.verify( token, JWT_ADMIN_SECRET, (err, admin) => {
            if (err){
                res.status(403).json({ message: "Forbidden: Invalid Admin" })
            }
            req.adminId = admin.id;
            next();
        } );
    }
    catch (error){
        console.log("No Authorization header provided"); 
        res.status(401).json({ message: 'Unauthorized: No token provided', error: error.message });
    }
}



module.exports = {
    userAuth,
    adminAuth
}