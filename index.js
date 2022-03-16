const express = require('express')
const connection = require('./config/db.config')
app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Node Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server Connected Listening on ${PORT}`))

// Get all data from database
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM test.data;', (err, rows, fields) => {
    if (!err) {
      res.send(rows)
      console.log(rows)
    } else {
      console.log(err)
    }
  })
})

// Get single data from database
app.get('/data/:id', (req, res) => {
  connection.query(
    'SELECT * FROM test.data WHERE id = ?;',
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.send(rows)
        console.log(rows)
      } else {
        console.log(err)
      }
    }
  )
})

// Delete single data from database
app.delete('/data/:id', (req, res) => {
  connection.query(
    'DELETE FROM test.data WHERE id = ?;',
    [req.params.id],
    (err, rows) => {
      if (!err) {
        res.send('Row Data Deleted Successfully')
      } else {
        console.log(err)
      }
    }
  )
})

// Insert data into database
app.post('/data', (req, res) => {
  connection.query(
    'INSERT INTO test.data (id, name, city) VALUES (?,?,?);',
    [req.body.id, req.body.name, req.body.city],
    (err, rows) => {
      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    }
  )
})
