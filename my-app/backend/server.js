const express = require('express')
const assert = require('assert')
const mongo = require('mongodb')
const monk = require('monk')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  next();
})

var db = monk('localhost:27017/duelDb')

app.get('/skills', (request, response) => {
  console.log("GET request for /skills")

  var collection = db.get('skills');
  collection.find({},{},function(err, res){
    response.send(JSON.stringify(res));
  })
})

app.get('/skill/:id', (request, response) => {
  console.log("GET request for /skill with id = " + request.params.id)
  var collection = db.get('skills');
  collection.findOne({ id: parseInt(request.params.id) }, {}, function(err, res){
    response.send(JSON.stringify(res));
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})