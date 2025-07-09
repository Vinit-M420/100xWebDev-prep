const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
const { connectToDatabase } = require('./db/index');
require('dotenv').config();

// console.log("MONGOOSE_URI specifically:", process.env.MONGOOSE_URI);
// console.log("Current working directory:", process.cwd());


const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);
app.use("/user", userRoutes);

connectToDatabase().then( () => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log("Server is running on localhost:" + PORT))
} );