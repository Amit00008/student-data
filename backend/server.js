const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { mongoconnect } = require("./mongoose");
dotenv.config();
app.use(express.json());
app.use(cors());
const userRoute = require("./routes/UserRoute");
mongoconnect();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.port}`);
});

app.use(userRoute);
