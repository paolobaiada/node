const pgPromise = require("pg-promise")();

const db = pgPromise("postgres://postgres:postgres@localhost:5432/planet");
const setUpDb = async () => {
  await db.none(`
  DROP TABLE IF EXISTS planets;

    CREATE TABLE planets(
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT
    );
    `);
  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);

 
};
setUpDb();

const getAll = async (req, res) => {
    const planets = await db.many(`SELECT * FROM planets;`)
  res.status(200).json(planets);
};

const getoneById = async (req, res) => {
  const { id } = req.params;
  const planet = await db.one(`SELECT * FROM planets WHERE id=$1;`, Number(id))
  res.json(planet);
};

const create = async (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  await db.none(`INSERT INTO planets (name) VALUES $1`, name)

  res.status(201).json({ msg: "the planet is added", data: planets });
};

const updateById = (req, res) => {
  const { id } = req.params;
  const {name} = req.body;
 db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id,name])
  res.status(200).json({ msg: "value changed", data: planets });
};
const deleteById = async (req, res) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))

  res.status(200).json({ msg: "deleted", data: planets });
};

const createImage = async (req,res) => {
    const {id} = req.params;
    const file = req.file?.path;
    

    if(file){
       await db.none(`UPDATE planets SET image=$1 WHERE id=$2`, [file,id])
       res.status(200).json({msg: "upload successfull"})
    }
    else res.status(400).json({msg:"upload failed"})
    
}

module.exports = {
  getAll,
  getoneById,
  create,
  updateById,
  deleteById,
  createImage
};
