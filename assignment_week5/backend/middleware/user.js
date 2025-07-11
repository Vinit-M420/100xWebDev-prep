const jwt = require("jsonwebtoken");
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
    //console.log("Auth gets triggered")
    const authHeader = req.headers.authorization;
    //console.log("Authorization Header:", authHeader); 

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        //console.log("Extracted Token:", token);

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid token' });
            }

            req.userId = user.id;
            next();
        });
    } else {
       // console.log("No Authorization header provided"); 
        res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
}

module.exports = { auth };