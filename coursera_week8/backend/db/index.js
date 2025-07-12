const mongoose = require("mongoose");
require('dotenv').config();

const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log('Database connected');
    }
    catch(error) {
        console.error("Database connection failed:" , error);
        process.exit(1);
    }
}

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    username: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const Admin = new Schema({
    username: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});


const Course = new Schema({
    courseId: ObjectId,
    title: String,
    description: String,
    price: Number,
    creatorId: ObjectId,
    imageURL: String
});

const Purchase = new  Schema({
    courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
});


const UserModel = mongoose.model("user", User);
const CourseModel = mongoose.model("course", Course);
const AdminModel = mongoose.model("admin", Admin);
const PurchaseModel = mongoose.model("purchase", Purchase);


module.exports = { 
    connectToDatabase,
    UserModel, 
    CourseModel,
    AdminModel,
    PurchaseModel
}