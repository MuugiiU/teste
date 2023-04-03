const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const restaurantRoutes = require("./routes/restaurantRoutes");

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/restaurants", restaurantRoutes);

connectDB(MONGO_URI);
app.listen(PORT, () => console.log("server aslaa"));
