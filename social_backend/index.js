const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app = express();


const PORT = process.env.PORT || 2266;
//database config
const connectDB = require('./config/db');
connectDB();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
});