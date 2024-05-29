const { userservice } = require("../service")

let postdata = async (req, res) => {
    let body = req.body

    let result = await userservice.adddata(body);
    res.status(201).json({
        message: "user create successfully",
        result,
    })
    console.log(result);
}

let getdata = async (req, res) => {
    let result = await userservice.findalldata();

    res.status(200).json({
        message: "user get successfully",
        result,
    })

    console.log(result);
}

let deletedata = async (req, res) => {
    let { id } = req.params;

    let result = await userservice.deleteuser(id);

    res.status(200).json({
        message: "user delete successfully",
        result,
    })

    console.log(result);
}

let putdata = async (req, res) => {
    let body = req.body;
    let { id } = req.params;

    let result = await userservice.updatauser(id, body);

    res.status(200).json({
        message: "user update successfully",
        result,
    })
    console.log(result);
}
module.exports = { postdata, getdata, deletedata, putdata }