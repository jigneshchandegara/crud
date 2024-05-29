const { userSchema } = require("../models")

let adddata = (body) => {
    return userSchema.create(body)
}

let findalldata = () => {
    return userSchema.find();
}

let deleteuser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updatauser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)

}
module.exports = { adddata, findalldata, deleteuser, updatauser }