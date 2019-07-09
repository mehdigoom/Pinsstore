var mysql = require('mysql');
  
var client= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 8889,
  database: 'peanshop',
  
});
  
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const end = function end() {
  client.end();
};

const getUsers = function getUsers(clbk, id) {
  let sql;

  if (id) 
    sql = `SELECT * FROM users WHERE id = ?`;

  else 
    sql = `SELECT * FROM users`;
  
  const query = client.query(sql, [id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
  console.log("Last Query :", query.sql);
}

const getProducts = function getProducts(clbk, id) {
  let sql = "SELECT * FROM products";
  client.query(sql, [id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

module.exports = {
  getUsers,
  getProducts,
};  