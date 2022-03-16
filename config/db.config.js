const mysql = require('mysql2')

//Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'shahid',
  password: 'shahid',
  database: 'test',
  multipleStatements: true,
})
connection.connect((err) => {
  if (err) {
    console.log(`Connection Failed ${err}`)
  } else {
    console.log('Database Connected!')
  }
})

module.exports = connection
