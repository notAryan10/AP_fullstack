const mysql = require("mysql2/promise");
const express = require("express");

const app = express();

app.use(express.json());

let db;
app.post("/contacts", async (req, res) => {
  await db.query(`INSERT INTO contacts(fullname, phoneno, email) VALUES ("${req.body.fullname}", ${Number(req.body.phoneno)}, "${req.body.email}");`)
  res.send("OK")
})
mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "contact_db",
    password: "sharda2911",
}).then((connection) => {
  db = connection;
  console.log("Database connected successfully")
  app.listen(3000, () => {
    console.log("Server started on port 3000")
  })
})




// const mysql = require("mysql2/promise");
// const express = require("express");

// const app = express();

// app.use(express.json());

// let db;

// app.post("/contacts", async (req, res) => {
//   await db.query(`INSERT INTO contacts(fullname, phoneno, email) VALUES ("${req.body.fullname}", ${Number(req.body.phoneno)}, "${req.body.email}");`)
//   res.send("OK")
// })

// mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "contacts_db",
//   password: "password"
// }).then((connection) => {
//   db = connection;
//   console.log("Database connected successfully")
//   app.listen(3000, () => {
//     console.log("Server started on port 3000")
//   })
// })