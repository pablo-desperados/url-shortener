const express = require("express");
require('./models/UrlShorten')
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const UrlShorten = mongoose.model("UrlShorten");
const path = require('path');
const PORT = 7000;

//connecting app to mongo
const mongoURI = "mongodb://localhost/url-shortner";
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

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlPath);
  })

app.listen(PORT || 5000, () => {
 console.log(`Server started on port`, PORT);
});

