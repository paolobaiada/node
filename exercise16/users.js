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


const signup = async (req,res) => {
const {username,password} = req.body
const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`,username)
if(user){
    res.status(409).json({msg:"username in use"})
}
else {
    const {id} = await db.one(
        `INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id`,
        [username,password]
    );
    res.status(201).json({id,msg: "user created"})
}
}

const logout = async (req,res) => {
    const user = req.user
    await db.none(`UPDATE user SET token=$2 WHERE id=$1`,[user?.id,null])
    res.status(200).json({msg:"logout sucessfull"})
}
module.exports = {login,signup,logout}