let planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

const getAll = (req,res) => {
   res.status(200).json(planets)
}

const getoneById = (req,res) => {
 const {id} = req.params
  const planet = planets.find((planet) => planet.id === Number(id))
  res.json(planet)
}

const create = (req,res) => {
  const {id,name} = req.body
  const newPlanet = {id,name}
  planets = [...planets, newPlanet]

  res.status(201).json({msg: 'the planet is added', data: planets})
}

const updateById =(req,res) => {
  const {id} = req.params
  const update = req.body
  planets = planets.map((planet) => {
    if (planet.id === Number(id)) {
      return {...planets,...update}
    }
    return planets
   } )
  res.status(200).json({msg: "value changed", data: planets})
}

const deleteById = (req,res) => {
  const {id} = req.params
   planets = planets.filter(planet => planet.id !== Number(id))
 
  res.status(200).json({msg: "deleted", data : planets})
}



module.exports=  {planets,getAll,getoneById,create,updateById,deleteById}