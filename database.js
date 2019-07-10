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

const getProducts = function getProducts(clbk) {
  let sql = "SELECT * FROM products";
  client.query(sql, (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

const getBasket = function getBasket(clbk, id) {
  let sql = "SELECT * FROM basket WHERE users_id = ?";
  client.query(sql, [id], (error, results, fields) => {
      
    if (error) return clbk(error, null);
    console.log(sql)
      return clbk(null, results);

  });
}
 
const delBasket = function delBasket(clbk, id) {
  let sql = "DELETE FROM basket WHERE users_id = ?";
  client.query(sql, [id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}

const addBasket = function addBasket(clbk, id,quantity,products_id,users_id) {
  let sql = "INSERT INTO basket VALUES (?,?, ?)";
  client.query(sql, [id,quantity,products_id,users_id], (error, results, fields) => {
      if (error) return clbk(error, null);
      return clbk(null, results);
  });
}


module.exports = {
  addBasket,
  getUsers,
  getProducts,
  getBasket,
  delBasket,
};  