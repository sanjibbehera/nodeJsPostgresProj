const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const { pool } = require('./dbConnect');
const app = express();
var path = require('path');
const port = process.env.PORTNO;
const envName = process.env.NODE_ENV;
app.use(logger('dev'));

app.locals.env = process.env;
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


var mainPageRoutes = require('./routers/index');

//Main Page Router..
app.use('/', mainPageRoutes);

// For Dev Envs.
var dev2confdb = require('./routers/dev/dev2_db_connectDB');
var dev1confdb = require('./routers/dev/dev1_db_connectDB');
var devAPP1ConfDataRoutes = require('./routers/dev/showDevAPPEnv1Data');
var devAPP2ConfDataRoutes = require('./routers/dev/showDevAPPEnv2Data');
var devDB1ConfDataRoutes = require('./routers/dev/showDevDBEnv1Data');
var devDB2ConfDataRoutes = require('./routers/dev/showDevDBEnv2Data');

// DEV Routers...
app.use('/showDevAPPEnv1Data', devAPP1ConfDataRoutes);
app.use('/showDevAPPEnv2Data', devAPP2ConfDataRoutes);
app.use('/showDevDBEnv1Data', devDB1ConfDataRoutes);
app.use('/showDevDBEnv2Data', devDB2ConfDataRoutes);

// DEV1 CRUD routers...
app.get('/getDEV1DBConfig', dev1confdb.getDEV1DBConfig);
app.post('/createDEV1DBConfig', dev1confdb.createDEV1DBConfig);
app.delete('/deleteDEV1DBConfigById', dev1confdb.deleteDEV1DBConfigById);
app.put('/deleteDEV1DBConfigById', dev1confdb.updateDEV1DBConfigById);

// DEV2 CRUD routers...
app.get('/getDEV2DBConfig', dev2confdb.getDEV2DBConfig);
app.post('/createDEV2DBConfig', dev2confdb.createDEV2DBConfig);
app.delete('/deleteDEV2DBConfigById', dev2confdb.deleteDEV2DBConfigById);
app.put('/deleteDEV2DBConfigById', dev2confdb.updateDEV2DBConfigById);

// DEV Dashboard Routers..
//app.use('/showDevAPPEnv1DashboardData', devAPP1ConfDashboardRoutes);
//app.use('/showDevAPPEnv2DashboardData', devAPP2ConfDashboardRoutes);
//app.use('/showDevDBEnv1DashboardData', devDB1ConfDashboardRoutes);
//app.use('/showDevDBEnv2DashboardData', devDB2ConfDashboardRoutes);

// For Test Envs.
var e2e2confdb = require('./routers/test/e2e2_db_connectDB');

// E2E1 routers..

// E2E2 CRUD routers...
app.get('/getE2E2DBConfig', e2e2confdb.getE2E2DBConfig);
app.post('/createE2E2DBConfig', e2e2confdb.createE2E2DBConfig);
app.delete('/deleteE2E2DBConfigById', e2e2confdb.deleteE2E2DBConfigById);
app.put('/deleteE2E2DBConfigById', e2e2confdb.updateE2E2DBConfigById);


app.listen(port, () => console.log(`Env Mgmt Dashboard App listening on port ${port}!`));