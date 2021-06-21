// INCLUDE EXPRESS MODULE
const express = require('express');

// CREATE EXPRESS APP
const app = express();

const cors = require('cors')
// ENV VARIABLE SETTING
const dotenv = require('dotenv');
dotenv.config();

const sqlConfig = require('./config/sql');

/************************************************************************************************
                	
                  CORS SETTINGS 
*************************************************************************************************/
app.use(cors());
//ADDING CORS

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, OPTIONS',
    'POST',
    'PUT',
    'DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, origin, devicetype, deviceid, apnstoken'
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

sqlConfig.bootstrap();

/************************************************************************************************
                                    
                                    SENDING REQUEST TO ROUTES

*************************************************************************************************/

// SIMPLE ROUTE FOR TESTING
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Basic Home loan',
  });
});

app.use('/', require('./app/routes')(app));

/************************************************************************************************
                	
                ESTABLISH PORT AND LAUCH APPLICATION ON PORT 

************************************************************************************************/

var port = process.env.PORT || '3000';
// listen for requests
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
