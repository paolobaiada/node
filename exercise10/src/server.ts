/* const TODO: string = "start writing your Express API server here :)";

console.log(TODO); */

import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()

app.use(morgan('dev'))

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

app.get('/api/planets', (req, res) => {
  res.status(200).json(planets)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})
