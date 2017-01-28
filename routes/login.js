var express = require('express');
var mysql = require('mysql');
var jsonWebToken = require('jsonwebtoken');
var app = require('../app');
var router = express.Router();


//User for test
var user = {username:"sam",
            password:"112358gyx"}

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'1123',
    database:'Test'
});

connection.connect();


/* POST username and password */
router.post('/authentications',function (req,res) {
    if (user.username != req.body.username){
        res.json({success:false,message:"Authentication failed. User not found !" })
    }else {
        if (user.password != req.body.password){
            res.json({success:false,message:"Authentication failed. Wrong password "})
        }else {


            res.json({"access_token":"thisisatoken"})
        }
    }


});


module.exports = router;

