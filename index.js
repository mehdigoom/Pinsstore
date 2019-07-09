const http = require('http');
const database = require("./database");
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var express = require('express');
var app = express();

var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  database.getUsers( (err, users) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(users);
  }, null);
});

app.get('/products', (req, res) => {
  database.getProducts( (err, products) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(products);
  }, null);
});

