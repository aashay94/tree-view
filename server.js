const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const dirTree = require("directory-tree");
var filepath = "C:/baselines";
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors')
var db;
var result;
const PATH = require('path');

app.use(cors());
//Establish Connection
MongoClient.connect('mongodb://localhost:27017/treeDB', function (err, client) {
  if (err)
    throw err
  else {
    db = client.db('treeDB');
    console.log('Connected to MongoDB');
    //Start app only after connection is ready
    // console.log that your server is up and running
    app.listen(PORT, function () {
      console.log('Server is running on Port:', PORT);
      if (module.parent == undefined) {
        result = dirTree(filepath, {extensions:/\.xml$/}, null, (item, PATH, stats) => {
          console.log(item);
                item.toggled = false
        });
        console.log(result)
        //db.collection('data').insert({ 'data': result });
      }
    });
  }
});

app.use(bodyParser.json())

// create a GET route
app.get('/data', function (req, res) {
  res.json(result)
})

app.post('/data', function(req, res) {
  res.json(result);
});