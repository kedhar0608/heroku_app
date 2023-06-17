const express=require('express');
const port=process.env.PORT || 2002;
const hbs=require('hbs');
var app=express();
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle:'Home Page',
        yr: new Date().getFullYear()
    });

});
app.get('/contact',(req,res) => {
    res.send('Contact page');
    
    });
    app.get('/about',(req,res) => {
        res.render('about.hbs',{
            pageTitle:'About',
            yr: new Date().getFullYear()
        });
        
        });
app.get('/home',(req,res) => {
            res.render('home.hbs',{
                pageTitle:'About',
                yr: new Date().getFullYear()
            });
            
            });
            app.get('/bca',(req,res) => {
                res.render('bca.hbs',{
                    pageTitle:'About',
                    yr: new Date().getFullYear()
                });
                
                });
                app.get('/mca',(req,res) => {
                    res.render('mca.hbs',{
                        pageTitle:'About',
                        yr: new Date().getFullYear()
                    });
                    
                    });

app.listen(port,()=>
{
    console.log("running s")
});
