const express = require("express");
const cors = require("cors");
const app = express();

// Allow CORS from only your frontend origin
app.use(cors());


// API route
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({ ans: a + b });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
