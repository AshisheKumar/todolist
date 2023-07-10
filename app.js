const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

var items=[];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/", function(req,res)
{
  // res.sendFile(__dirname+"/index.html");
const day = date.getDay();
res.render("list",{
  KindOfDay : day
  , listItems: items
})
});

app.post("/",function(req,res)
{
  var item = req.body.listItems;
  items.push(item);
  res.redirect("/");
}
);

app.listen(3000,function()
{
  console.log("Server started at port number 3000");
})
