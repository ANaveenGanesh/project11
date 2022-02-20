const mysql=require('mysql');
const expree=require('express');
var app=express();
const parser=require('body-parser');
app.use(parser.json());
var connection=mysql.createConnection(
'host:'localhost',
user:'root',
password:'1234'
database:'CustomerDB'
});
connection.connect((err)=>
{
if(!err)
console.log('DB Connected');
else
console.log('Error');
})
app.listen(3000,()=>console.log('server started'));
app.get('/customer',(req,res)=>
{
connection.query{select*from customer,(err,rows fields)=>
{
if(!err)
res.send(rows);
else
console.log("error");
});
});
