const express=require('express');
var app=express();
var user={
    name:'kedhar',
    printMsg:()=>{console.log('hii');}
};

app.get('/',(req,res) => {
res.send('<h1>hello express</h1>');

});
app.get('/contact',(req,res) => {
    res.send(user.printMsg);
    
    });

app.listen(2001);