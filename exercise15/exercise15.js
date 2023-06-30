const express = require("express")
const db = require("./db")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())


app.get("/", async (req,res) => {
const data = await db.query(`SELECT * FROM users`)
res.status(200).json(data)
})
app.post("/users", async (req,res) => {
    const {name} = req.body
     await db.none(`INSERT INTO users (name) VALUES ($1)`,[name])
    res.status(200).json({msg: "name added"})
})




app.get("/:id", async (req,res) => {
    const {id} = req.params
    const data = await db.one(`SELECT * FROM users WHERE id=$1`,Number(id))
    res.status(200).json(data)
    })
app.listen(3000, () => {
    console.log("listening")
})