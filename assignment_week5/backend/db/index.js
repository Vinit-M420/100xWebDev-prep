const mongoose = require("mongoose");
require('dotenv').config();

// Connect to MongoDB
const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_URI); 
        // 
        console.log("Database connected")
    }
    catch(error){
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
}

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String, unique: true},
    password: String,
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = { 
    connectToDatabase,
    UserModel, 
    TodoModel
}