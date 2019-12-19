var express = require('express');
var router = express.Router();
require('dotenv').config();
const envName = process.env.NODE_ENV;
const { pool } = require('../../dbConnect');

if(envName==='development'){
    pool.query("SELECT application_name, appl_database_name, appl_db_service_name, appl_db_service_type, appl_db_service_details, appl_db_package_name, appl_db_service_operation_health FROM dev2_db_config_data ORDER BY id ASC", (error, dispResults) => {
        if (error) {
          throw error
        }
        DB2ConfData = dispResults.rows;
      });
  }
  else if(envName==='test'){
    pool.query("SELECT application_name, appl_database_name, appl_db_service_name, appl_db_service_type, appl_db_service_details, appl_db_package_name, appl_db_service_operation_health FROM dev2_db_config_data ORDER BY id ASC", (error, dispResults) => {
        if (error) {
          throw error
        }
        DB2ConfData = dispResults.rows;
      });
  }
  
router.get('/', function(req, res) {
  res.render('dev/showDev2DBDataConf', {title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
  db2DataList: DB2ConfData}, function(err, html) {
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