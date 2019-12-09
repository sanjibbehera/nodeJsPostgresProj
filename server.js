const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const { pool } = require('./dbConnect');
const app = express();
var path = require('path');
const port = process.env.PORTNO;
const envName = process.env.NODE_ENV;
const e2e2confdb = require('./routers/e2e2_db_connectDB');
console.log(envName);
var envData = {};

app.locals.env = process.env;
app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/getE2E2DBConfig', e2e2confdb.getE2E2DBConfig);
app.get('/dispE2E2DBConfig', e2e2confdb.dispE2E2DBConfig);
app.post('/createE2E2DBConfig', e2e2confdb.createE2E2DBConfig);
app.delete('/deleteE2E2DBConfigById', e2e2confdb.deleteE2E2DBConfigById);
app.put('/deleteE2E2DBConfigById', e2e2confdb.updateE2E2DBConfigById);

if(envName==='development'){
  indexDB1File='./dev/showDEV1DBConf';
  indexDB2File='./dev/showDEV2DBConf';
  indexAPP1File='./dev/showDEV1APPConf';
  indexAPP2File='./dev/showDEV2APPConf';
  pool.query("SELECT COUNT(*) cntr, environment_name FROM dev_env_appl GROUP BY environment_name", (error, results) => {
    if (error) {
      throw error
    }
    //console.log(results.rows);
    envData=results.rows;
    pool.query("SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM dev2_db_config_data ORDER BY id ASC", (error, dispResults) => {
      if (error) {
        throw error
      }
      DB2ConfData = dispResults.rows;
    });
    
  });
}
else if(envName==='test'){
  indexDB1File='./test/showDEV1DBConf';
  indexDB2File='./test/showDEV2DBConf';
  indexAPP1File='./test/showDEV1APPConf';
  indexAPP2File='./test/showDEV2APPConf';
  pool.query("SELECT COUNT(*) cntr, environment_name FROM test_env_appl GROUP BY environment_name", (error, results) => {
    if (error) {
      throw error
    }
    //console.log(results.rows);
    envData = results.rows;
    pool.query("SELECT application_name, database_name, service_name, service_type, database_service_details, database_package_name, service_operation_health FROM e2e2_db_config_data ORDER BY id ASC", (error, dispResults) => {
      if (error) {
        throw error
      }
      DB2ConfData = dispResults.rows;
    });
  });
}

app.get('/', function(req, res) {
  res.render('index', { 
    title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
    dataList: envData
  }, function(err, html) {
      if (err) {
          //res.redirect('/404');
          res.status(404).end('error');
      } else {
          //console.log(envData);
          res.status(200).send(html);
      }
  });
});

app.get('/showDBEnv2Data', function(req, res){
  res.render(indexDB2File, {  
    title: 'Environment Management Dashboard', navbar_title: 'Welcome to Environment Configuration Managed System',
    data: JSON.stringify(DB2ConfData)
  }, function(err, html) {
    if (err) {
        //res.redirect('/404');
        res.status(404).end('error');
    } else {
        console.log(JSON.stringify(DB2ConfData));
        res.status(200).send(html);
    }
  });
});

app.listen(port, () => console.log(`Env Mgmt Dashboard App listening on port ${port}!`))