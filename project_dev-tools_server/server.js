const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Body-parser is the Node.js body parsing middleware. 
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const bodyParser = require('body-parser');
global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');
// mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);



const username = "<mongodb username>";
const password = "<password>";
const cluster = "<cluster name>";
const dbname = "myFirstDatabase";

// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_PORT,
//   DB_NAME,
// } = process.env;
// const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
const url = 'mongodb://traderrecord:172352@49.0.124.7:27900/traderrecord'

mongoose.connect(
  url,
  { useNewUrlParser: true }
);
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
// tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) 
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: true }));
// tells the system that you want json to be used.
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);