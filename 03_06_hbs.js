const express=require('express');

var app=express();
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');

app.get('/',(req,res) => {
    res.send('Home Page');
    
    });
    app.get('/intro',(req,res) => {
        res.render('intro.hbs',{
            pageTitle:'About',
            yr: new Date().getFullYear()
        });
        
        });
app.get('/academic',(req,res) => {
            res.render('academic.hbs',{
                p1:'70%',
                p2:'71%',
                p3:'72%'
            });
            
            });
            app.get('/hobbies',(req,res) => {
                res.render('hobbies.hbs',{
                    hobby1:'Listening to music',
                    hobby2:'Playing Cricket',
                    hobby3:'Playing Chess'
                });
                
                });
                app.get('/personal',(req,res) => {
                    res.render('personal.hbs',{
              
                        fname:'Kedhar',
                        lname:'Kokkiligadda',
                        city:'Vijaywada',
                        gender:'Male',
                        state:'Andhra Pradesh',
                        country:'India',
                        number:'9951901436'

                    });
                    
                    });

app.listen(2002,()=>
{
    console.log("running s")
});