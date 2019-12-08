const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const { pool } = require('./dbConnect');
const app = express();
var path = require('path');
const port = process.env.PORTNO;

app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

pool.query("SELECT COUNT(*) cntr, environment_name FROM ENV_APPL GROUP BY environment_name", (error, results) => {
  if (error) {
    throw error
  }
  console.log(results.rows);
  envData = results.rows;
});

//app.get('/', (req, res) => res.render('index', {  
//  title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
//  data: JSON.stringify(envData)
//  }));

app.get('/', function(req, res) {
  res.render('index', { 
    title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
    data: JSON.stringify(envData)
  }, function(err, html) {
      if (err) {
          //res.redirect('/404');
          res.status(404).end('error');
      } else {
          res.status(200).send(html);
      }
  });
});

app.listen(port, () => console.log(`Env Mgmt Dashboard App listening on port ${port}!`))