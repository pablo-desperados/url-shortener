const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 7000;

//connecting app to mongo
const mongoURI = "mongodb://localhost/url-shortner";
const mongoose = require("mongoose");
const connectOptions = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
  };

mongoose.connect(mongoURI, connectOptions, (err, db) => 
{ 
if (err) console.log(`Error`, err); 
console.log(`Connected to MongoDB`); 
}); 



//Start server on Port 7000
app.use(bodyParser.json());
app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
});