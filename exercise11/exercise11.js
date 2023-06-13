const express = require('express')
const {planets,getAll,getoneById,create,updateById,deleteById} = require('./planets.js')


const app = express()
app.use(express.json())

app.get('/api/planets', getAll)


app.get('/api/planets/:id',getoneById )
  


app.post('/api/planets',create)
  


app.put('/api/planets/:id',updateById)



app.delete('/api/planets/:id',deleteById)



app.listen(3000)

 