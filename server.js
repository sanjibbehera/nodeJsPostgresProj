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

var e2e2confdb = require('./routers/e2e2_db_connectDB');
var routes = require('./routers/index');
var devDB2Routes = require('./routers/dev/showDevDBEnv2Data');

app.use('/', routes);
app.use('/showDBEnv2Data', devDB2Routes);

app.get('/getE2E2DBConfig', e2e2confdb.getE2E2DBConfig);
app.get('/dispE2E2DBConfig', e2e2confdb.dispE2E2DBConfig);
app.post('/createE2E2DBConfig', e2e2confdb.createE2E2DBConfig);
app.delete('/deleteE2E2DBConfigById', e2e2confdb.deleteE2E2DBConfigById);
app.put('/deleteE2E2DBConfigById', e2e2confdb.updateE2E2DBConfigById);

app.listen(port, () => console.log(`Env Mgmt Dashboard App listening on port ${port}!`))