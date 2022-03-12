const pgp = require('pg-promise')();

const db = pgp({
    user : 'postgres',
    password : 'fec86453',
    host : "localhost",
    port : 5432, 
    database : 'blogs'
})

module.exports = db;