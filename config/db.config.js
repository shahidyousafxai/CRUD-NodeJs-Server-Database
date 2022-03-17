const mysql = require('mysql2')
require('dotenv').config()

//Database connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})
connection.connect((err) => {
  if (err) {
    console.log(`Connection Failed ${err}`)
  } else {
    console.log('Database Connected!')
  }
})

module.exports = connection
