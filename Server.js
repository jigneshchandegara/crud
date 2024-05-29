require("dotenv").config()
let http = require("http");
let express = require("express");
let app = express();
let connectDB = require("./DB/dbconnect");
let routes = require("./routes")

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/v1", routes)

//DBconnect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})