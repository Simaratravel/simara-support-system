const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Simara Support System API is running 🚀");
});
const indexRoutes = require("./routes/index.js");
const testRoutes = require("./routes/testRoutes.js");
app.use("/", indexRoutes);
app.use("/test", testRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
