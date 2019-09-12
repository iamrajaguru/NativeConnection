const express = require('express');
const mongoose = require('mongoose');
const app= express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var corsobj = {
    orign: "http://192.168.1.164:8081",
    optionSucessStatus: 200
  };
  app.use(cors(corsobj));
  app.listen(3000, () => {
    console.log("server listening the port 3000");
  });
  mongoose.connect("mongodb://192.168.1.164:27017/Trial", {
  useNewUrlParser: true
});
const UserDetails = mongoose.model("UserDetails", {
    Email: String,
    Username:String,
    Password:String
   
  });
  
  app.post("/signup",(req,res)=>{
    console.log(req.body.email);
    var userObject = new UserDetails();
    userObject.Email=req.body.email;
    userObject.Username=req.body.username;
    userObject.Password=req.body.password;
    userObject.save((err, docs) => {
        res.send(userObject);
        console.log("Sucess");
      });

  })