var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "1123",
    port : 3306, //port mysql
    database: 'Test'
});

connection.connect();


/* GET test page. */
router.get('/test', function(request, response) {
    connection.query('SELECT * FROM login', function(err, rows, fields) {
        if (err) {
            console.log('Encountered an error:', err.message);
            return response.send(500, err.message);
        }
        data = ({'data' : rows});
        console.log(data);


        response.json(data);
    });


});

module.exports = router;
