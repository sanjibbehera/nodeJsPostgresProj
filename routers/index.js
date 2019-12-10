var express = require('express');
var router = express.Router();
require('dotenv').config();
const envName = process.env.NODE_ENV;
const { pool } = require('../dbConnect');
console.log(envName);

if(envName==='development'){
    pool.query("SELECT COUNT(*) cntr, environment_name FROM dev_env_appl GROUP BY environment_name", (error, results) => {
      if (error) {
        throw error
      }
      //console.log(results.rows);
      envData=results.rows;      
    });
  }
  else if(envName==='test'){
    pool.query("SELECT COUNT(*) cntr, environment_name FROM test_env_appl GROUP BY environment_name", (error, results) => {
      if (error) {
        throw error
      }
      //console.log(results.rows);
      envData = results.rows;
    });
  }

router.get('/', function(req, res) {
    res.render('main/index', {title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
    dataList: envData}, function(err, html) {
        if (err) {
            //res.redirect('/404');
            res.status(404).end('error');
        } else {
            //console.log(envData);
            res.status(200).send(html);
        }
    });
  });

module.exports = router;