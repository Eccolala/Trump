/**
 * Created by eccolala on 17-1-28.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1123',
    port:3306,
    database:'cooking_plus'
});

connection.connect();

router.get('/categories',function (request, response) {
    connection.query(
        'INSERT INTO category (`pic_url`) ' +
        'VALUES (\"gyx\");', function (err, rows) {
        if (err){
            console.log('Encountered An Error',err.message);
            return response.send(500,err.message);
        }

    });
    connection.query('select * from category order by published_at desc limit 1',function (err, rows) {
        if (err){
            console.log('Encounter an Error',err.message);
            return response.send(500,err.message);
        }
        data = ({'data':rows});
        console.log(data);
        response.json(data);

    })
});

module.exports = router;