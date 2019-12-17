var express = require('express');
var router = express.Router();
require('dotenv').config();
const envName = process.env.NODE_ENV;
const { pool } = require('../../dbConnect');

if(envName==='development'){
    pool.query("SELECT application_name, sub_application_name, source_application, target_application, service_name, operation_name, service_name_version, configuration_url, application_package_name, service_type, application_support_type, service_operation_health FROM dev1_config_data ORDER BY id ASC", (error, dispResults) => {
        if (error) {
          throw error
        }
        APP1ConfData = dispResults.rows;
      });
  }
  else if(envName==='test'){
    pool.query("SELECT application_name, sub_application_name, source_application, target_application, service_name, operation_name, service_name_version, configuration_url, application_package_name, service_type, application_support_type, service_operation_health FROM e2e1_config_data ORDER BY id ASC", (error, dispResults) => {
        if (error) {
          throw error
        }
        APP1ConfData = dispResults.rows;
      });
  }
  
router.get('/', function(req, res) {
  res.render('dev/showDev1APPDataConf', {title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
  app1DataList: APP1ConfData}, function(err, html) {
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