/* Módulos para que la aplicación express funcione */
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const data = path.join(__dirname, "../public/data", "contacts.db");
const database = new sqlite3.Database(data, err => {
  if(err){
    return console.error(err.message);
  }
  else{
    console.log("Database conected");
  }
});
const create = "CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(16), phone INTEGER, debe VARCHAR(2), bs DECIMAL(9.2), dolar DECIMAL(9.2));";
database.run(create, err => {
  if(err){
    return console.error(err.message);
  }
  else{
    console.log("Table created");
  }
});
/* Base de datos creada con SQLite3 */
let nm, id;
/* Al estar en el inicio mostrar los contactos */
router.get('/', function(req, res, next) {
  const query = "SELECT * FROM contacts;";
          database.all(query, [], (err, rows) => {
            if(err){
              return console.error(err.message);
            }
            else{
              res.render("index.ejs", {data:rows, contact:nm, Id:id, phone:""});
            }
          });
});

/* Página de que si debe un contacto */
router.get('/debe.ejs', function(req, res, next) {
  const query = `SELECT * FROM contacts WHERE id='${id}';`;
          database.all(query, [], (err, rows) => {
            if(err){
              return console.error(err.message);
            }
            else{
              res.render("debe.ejs", {data:rows, contact:nm, Id:id});
            }
          });
  
});

/* Página de crear contactos */
router.get('/crear.ejs', function(req, res, next) {
  res.render('crear.ejs',{ data: {},});
});

/* Para editar los contactos */
router.post('/debe.ejs', function(req, res, next) {
  let name = req.body.contact,
  phone = req.body.phone,
  debe = req.body.debe,
  bs = req.body.bs,
  dolar = req.body.dolar,
  id = req.body.id;
  delete_contact = req.body.delete;

  if(delete_contact == ""){

    const query = `UPDATE contacts SET name='${name}' , phone='${phone}' , debe='${debe}' , bs='${bs}' , dolar='${dolar}' WHERE id='${id}';`;
    database.run(query, [], (err)=>{
      if (err){
        return console.error(err.message);
      }
      else{
        console.log("Contact updated");
        res.redirect('/');
      }
    });
  }else{
    console.log(`Name: ${name}\nID: ${id}`);
    const query = `DELETE FROM contacts WHERE id=${id};`;
    database.run(query, [], (err)=>{
      if (err){
        return console.error(err.message);
      }
      else{
        console.log("Contact deleted");
        res.redirect('/');
      }
    });

  }
});

/* Para editar los contactos */
router.post('/', function(req, res, next) {
  nm = req.body.contact;
  id = req.body.id;
  console.log(id);
  res.redirect('/debe.ejs');
});

/* Creando contactos */
router.post('/crear.ejs', function(req, res, next) {
  let tel = req.body.operadora + req.body.phone;
  const query = "INSERT INTO contacts(name, phone, debe, bs, dolar) VALUES (?,?,?,?,?);";
	const messages = [req.body.name, tel, req.body.debe, req.body.bs, req.body.dolar];
  database.run(query, messages, (err)=>{
    if (err){
      return console.error(err.message);
    }
    else{
      console.log("Contact created");
      res.render("crear.ejs", {data:{}});
    }
  });
});


module.exports = router;
