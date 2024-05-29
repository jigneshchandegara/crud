let express = require("express");
const { usercontroller } = require("../controller");
let route = express.Router();

route.post("/createuser", usercontroller.postdata);
route.get("/getuser", usercontroller.getdata);
route.delete("/deleteuser/:id", usercontroller.deletedata);
route.put("/updatauser/:id" , usercontroller.putdata)

module.exports = route