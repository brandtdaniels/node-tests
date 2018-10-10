const express = require('express')

var app = express()

app.get('/', (request, response) => {

  response.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  })

})

app.get('/users', (request, response) => {

  response.send([
    {name: 'Brandt'},
    {name: 'Bryan'}
  ])

})

app.listen(3000)

module.exports.app = app
