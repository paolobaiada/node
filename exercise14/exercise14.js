const express = require('express')
const {getAll,getoneById,create,updateById,deleteById,createImage} = require('./planets.js')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./uploads')
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

const app = express()
app.use(express.json())

app.get('/api/planets', getAll)
 

app.get('/api/planets/:id',getoneById )
  


app.post('/api/planets',create)
  


app.put('/api/planets/:id',updateById)



app.delete('/api/planets/:id',deleteById)


app.post('/api/planets/:id/image',upload.single('image'),createImage)



app.listen(3000, () => {
    console.log("listening")
})

 