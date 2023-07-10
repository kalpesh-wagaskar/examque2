const express = require('express');
const appForBook = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'classwork'
});
connection.connect();
appForBook.get('/',
    (request, response) => {

        var Query = "select id,b_name,author,book_type,price,langauge from Book_Tb;";
        connection.query(Query, (error, result) => {
            // console.log("in")
            if (error == null) {
                //console.log("in")

                var data = JSON.stringify(result);
                response.setHeader("Content-Type", "application/json");
                response.send(data);
            }
            else {
                console.log(error);
                response.setHeader("Content-Type", "application/json");
                response.send(error);
            }
        })

    })
    appForBook.post('/', (request, response) => {

    var query=`insert into Book_Tb (id,b_name,author,book_type,price,langauge) values(${request.body.id},'${request.body.b_name}','${request.body.author}','${request.body.book_type}',${request.body.price},'${request.body.langauge}');`
    connection.query(query, (error, result) => {
        if (error == null) {
            //console.log("in");
       
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.send(data);
        }
        else {
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            response.send(error);
        }
    })
})



appForBook.put('/:id',(request,response)=>{
    var query=`update Book_Tb set price=${request.body.price},langauge='${request.body.langauge}' where id=${request.params.id};`
        connection.query(query,(error,result)=>{
            if(error==null){
                var data =JSON.stringify(result);
                response.setHeader("Content-Type","application/json");
                response.send(data);
            }
            else{
                console.log(error);
                response.setHeader("Content-Type","application/json");
                response.send(data);
            }
        })
    })
module.exports = appForBook;