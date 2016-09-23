
const uri = 'mongodb://rb7373:rb7373@ds035786.mlab.com:35786/heroku_xdrvz1pv';

let Mongoose = require("mongoose");
Mongoose.connect(uri);

let db = Mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection succeeded.")

  const topic = require('./models/topics');
  topic.createFunctions();
  topic.createGeometry();

});

