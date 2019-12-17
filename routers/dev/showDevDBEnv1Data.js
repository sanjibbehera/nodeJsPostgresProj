var express = require('express');
var router = express.Router();
require('dotenv').config();
const envName = process.env.NODE_ENV;
const { pool } = require('../../dbConnect');

if(envName==='development'){
    pool.query("SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM dev1_db_config_data ORDER BY id ASC", (error, dispResults) => {
        if (error) {
          throw error
        }
        DB1ConfData = dispResults.rows;
      });
  }
  else if(envName==='test'){
    pool.query("SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM dev1_db_config_data ORDER BY id ASC", (error, dispResults) => {
        if (error) {
          throw error
        }
        DB1ConfData = dispResults.rows;
      });
  }
  
router.get('/', function(req, res) {
  res.render('dev/showDev1DBDataConf', {title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
  db1DataList: DB1ConfData}, function(err, html) {
      if (err) {
          //res.redirect('/404');
          res.status(404).end('error');
      } else {
          //console.log(DB2ConfData);
          res.status(200).send(html);
      }
  });
});

module.exports = router;