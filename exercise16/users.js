const db = require("./db")
require('dotenv').config()
const jwt = require("jsonwebtoken")
const {SECRET} = process.env
const login = async (req,res) => {
const {username,password} = req.body
const user = await db.one(`SELECT * FROM users WHERE username=$1`,username)
if(user && user.password === password){
const payload = {
    id:user.id,
    username
}
const token = jwt.sign(payload,SECRET)
await db.none(`UPDATE users SET token=$2 WHERE id=$1`,[user.id,token])
res.status(200).json({id: user.id,username,token})
}
else res.status(400).json({msg: "username or password incorrect"})
}
module.exports = {login}