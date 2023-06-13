const express = require('express')
const {planets} = require('./planets.js')
const app = express()
app.use(express.json())

app.get('/api/planets', (req,res) => {
  res.status(200).json(planets)
})

app.get('/api/planets/:id',(req,res) => {
  const {id} = req.params
  const planet = planets.find((planet) => planet.id === Number(id))
  res.json(planet)
})

app.post('/api/planets',(req,res) => {
  const {id,name} = req.body
  const newPlanet = {id,name}
  planets = [...planets, newPlanet]

  res.status(201).json({msg: 'the planet is added'})
})

app.put('/api/planets/:id',(req,res) => {
const {id} = req.params
const planet = req.body
planets[Number(id) - 1] = planet
res.status(200).json({msg: "value changed", data: planets})
})

app.delete('/api/planets/:id',(req,res) => {
  const {id} = req.params
  const index = planets.findIndex(planet => planet.id === id)
  planets.splice(index,1)
  res.status(200).json({msg: "deleted", data : planets})
})

app.listen(3000)