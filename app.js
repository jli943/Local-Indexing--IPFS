const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("permission");
  });

  app.post("/home", function(req, res){
    console.log(req.body);
    res.render("home", {selectedFiles: req.body.filename});
  });

  app.post("/index", function(req, res){
    console.log(req.body);
    //python
  });

app.listen(8086, function() {
  console.log("Server started on port 8086");
});
