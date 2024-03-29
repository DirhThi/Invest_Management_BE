const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const khoancodinhRoute = require("./routes/khoancodinh");
const lsgiaodichRoute = require("./routes/lsgiaodich");
const sotietkiemRoute = require("./routes/sotietkiem");
const quyvayRoute = require("./routes/quyvay");
const quyhuiRoute = require("./routes/quyhui");
const lshuiRoute = require("./routes/lshui");




dotenv.config();
//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB");
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

//ROUTES

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/khoancodinh",khoancodinhRoute);
app.use("/api/lsgd",lsgiaodichRoute);
app.use("/api/sotietkiem",sotietkiemRoute);
app.use("/api/quyvay",quyvayRoute);
app.use("/api/quyhui",quyhuiRoute);
app.use("/api/lshui",lshuiRoute);




app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running...");
});
