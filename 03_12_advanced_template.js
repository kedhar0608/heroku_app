const express=require('express');
const hbs=require('hbs');
var app=express();
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
})
app.get('/',(req,res) => {
    res.send('Home Page');
    
    });
    app.get('/intro',(req,res) => {
        res.render('intro.hbs',{
            pageTitle:'Introduction',
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
                    pageTitle:'Hobbies',
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
                    app.get('/about',(req,res) => {
                        res.render('about.hbs',{
                           pageTitle:'About'
                        });
                    });

app.listen(2002,()=>
{
    console.log("running s")
});