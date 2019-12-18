var express = require('express');
var router = express.Router();
require('dotenv').config();
const envName = process.env.NODE_ENV;
const { pool } = require('../dbConnect');
console.log(envName);

if(envName==='development'){
    pool.query("SELECT COUNT(*) mon_appl_cntr, environment_name FROM dev_env_appl GROUP BY environment_name union all select count(*) unavailable_service, 'DEV1_UNAV_APP' environment_name from dev1_config_data where service_operation_health=0 union all select count(*) mon_appl_cntr, 'DEV1_AV_PROC' environment_name from dev1_config_data where service_type='Processes' union all select count(*) mon_appl_cntr, 'DEV1_AV_WEB' environment_name from dev1_config_data where service_type='Webservices' union all select count(*) mon_appl_cntr, 'DEV1_AV_GUI' environment_name from dev1_config_data where service_type='GUIservices' union all select count(*) mon_appl_cntr, 'DEV2_AV_PROC' environment_name from dev2_config_data where service_type='Processes' union all select count(*) mon_appl_cntr, 'DEV2_AV_WEB' environment_name from dev2_config_data where service_type='Webservices' union all select count(*) mon_appl_cntr, 'DEV2_AV_GUI' environment_name from dev2_config_data where service_type='GUIservices' union all select count(*) unavailable_service, 'DEV2_UNAV_APP' environment_name from dev2_config_data where service_operation_health=0 union all select count(*) unavailable_service, 'DEV1_UNAV_DB' environment_name from dev1_db_config_data where service_operation_health=0 union all select count(*) unavailable_service, 'DEV2_UNAV_DB' environment_name from dev2_db_config_data where service_operation_health=0 union all select count(*) mon_appl_cntr, 'DEV1_SERVTYP_DB' environment_name from dev1_db_config_data where service_type='DB' union all select count(*) mon_appl_cntr, 'DEV1_SERVTYP_GG' environment_name from dev1_db_config_data where service_type='GG' union all select count(*) mon_appl_cntr, 'DEV2_SERVTYP_DB' environment_name from dev2_db_config_data where service_type='DB' union all select count(*) mon_appl_cntr, 'DEV2_SERVTYP_GG' environment_name from dev2_db_config_data where service_type='GG'", (error, results) => {
      if (error) {
        throw error
      }
      //console.log(results.rows);
      envData=results.rows;      
    });
  }
  else if(envName==='test'){
    pool.query("SELECT COUNT(*) mon_appl_cntr, environment_name FROM test_env_appl GROUP BY environment_name union all select count(*) unavailable_service, 'E2E1_UNAV_APP' environment_name from e2e1_config_data where service_operation_health=0 union all select count(*) mon_appl_cntr, 'E2E1_AV_PROC' environment_name from e2e1_config_data where service_type='Processes' union all select count(*) mon_appl_cntr, 'E2E1_AV_WEB' environment_name from e2e1_config_data where service_type='Webservices' union all select count(*) mon_appl_cntr, 'E2E1_AV_GUI' environment_name from e2e1_config_data where service_type='GUIservices' union all select count(*) mon_appl_cntr, 'E2E2_AV_PROC' environment_name from e2e2_config_data where service_type='Processes' union all select count(*) mon_appl_cntr, 'E2E2_AV_WEB' environment_name from e2e2_config_data where service_type='Webservices' union all select count(*) mon_appl_cntr, 'E2E2_AV_GUI' environment_name from e2e2_config_data where service_type='GUIservices' union all select count(*) unavailable_service, 'E2E2_UNAV_APP' environment_name from e2e2_config_data where service_operation_health=0 union all select count(*) unavailable_service, 'E2E1_UNAV_DB' environment_name from e2e1_db_config_data where service_operation_health=0 union all select count(*) unavailable_service, 'E2E2_UNAV_DB' environment_name from e2e2_db_config_data where service_operation_health=0 union all select count(*) mon_appl_cntr, 'E2E1_SERVTYP_DB' environment_name from e2e1_db_config_data where service_type='DB' union all select count(*) mon_appl_cntr, 'E2E1_SERVTYP_GG' environment_name from e2e1_db_config_data where service_type='GG' union all select count(*) mon_appl_cntr, 'E2E2_SERVTYP_DB' environment_name from e2e2_db_config_data where service_type='DB' union all select count(*) mon_appl_cntr, 'E2E2_SERVTYP_GG' environment_name from e2e2_db_config_data where service_type='GG'", (error, results) => {
      if (error) {
        throw error
      }
      //console.log(results.rows);
      envData = results.rows;
    });
  }

router.get('/', function(req, res) {
    res.render('main/index', {title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
    monServdataList: envData}, function(err, html) {
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