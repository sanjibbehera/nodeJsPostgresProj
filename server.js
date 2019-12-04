const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORTNO

app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {
    title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System'
  }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))