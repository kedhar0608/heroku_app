const express=require('express');
const hbs=require('hbs');
var app=express();
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res) => {
res.send('<h1>hello kedhar</h1>');

});
app.get('/contact',(req,res) => {
    res.send('Contact page');
    
    });

app.listen(2001);