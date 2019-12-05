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

pool.query("select count(*) cntr, environment_name from env_appl group by environment_name", (error, results) => {
    if (error) {
      throw error
    }
    //console.log(results.rows);
    envData = results.rows;
  });

app.get('/', (req, res) => res.render('index', {  
  title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
  data: JSON.stringify(envData)
  }));

app.listen(port, () => console.log(`Env Mgmt Dashboard App listening on port ${port}!`))