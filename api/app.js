if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non prod environments
  require("dotenv").config()
}

require('./config/db_connection.js');
require('./config/passport.js');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Auth = require('./routes/auth/router.js');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json({type: '*/*'}));

//Routes
app.use('/auth', Auth);

app.listen(3001, () => {
  console.log(`Server started on port  + ${3001}`);
});
