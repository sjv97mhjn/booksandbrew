var express = require('express'),
  app = express(),
 path = require('path'),
 mongoose = require("mongoose"),
 bodyParser = require("body-parser"),
 user = require('./models/user');

mongoose.connect("mongodb://mahima:mahima@ds247479.mlab.com:47479/booksandbrew");
//var particlesJS = require('particles.js');

app.use(express.static(__dirname + "/public"));
//app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function(req,res){
	//res.send("Cool Dude");
	//console.log(process.env.PORT);
 res.sendFile(path.join(__dirname+'/public/bb.html'));
})

app.post('/test',function(req,res){
	console.log("Happy");
	console.log(req);

	console.log(req.query);
	console.log(req.body);
	var newUser = new user({
				first:req.body.f_name,
				middle:req.body.m_name,
				last:req.body.l_name,
				gender:req.body.gender,
				password:req.body.pswd,
				phone: req.body.tel,
	      email: req.body.email
	    });
			newUser.save(function(err,result){
				if(err)
				console.log(err);
				else {
					console.log(result);
          res.sendFile(path.join(__dirname+'/public/congo.html'));
				}
			})


})

app.listen(process.env.PORT || 5000,function(req,res){
	console.log("Listening on port 80");
})
