const pgPromise = require("pg-promise")()
const db = pgPromise("postgres://postgres:postgres@localhost:5432/user");

const dataBase = async () => {
await db.none(`
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
)
`)
await db.none(`INSERT INTO users (username,password) VALUES ('pablo',1234)`)
await db.none(`INSERT INTO users (username,password) VALUES ('luca',0000)`)
}
dataBase()

module.exports = db;