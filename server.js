const express = require('express');
require('dotenv').config();
const app = express();
var path = require('path');
const port = process.env.PORTNO;

app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', {
    title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System'
  }));

app.listen(port, () => console.log(`Env Mgmt Dashboard App listening on port ${port}!`))