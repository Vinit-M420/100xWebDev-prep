const express = require("express");
const app = express();
const cors = require('cors');
const courseRoutes = require("./routes/course");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const { connectToDatabase } = require("./db")
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/course", courseRoutes);


connectToDatabase().then( () => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log("Server running on localhost:" + PORT));
});