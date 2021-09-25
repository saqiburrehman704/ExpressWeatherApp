const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.port || 5000;


const staticpath = (path.join(__dirname,"../public"));
const viewspath = (path.join(__dirname,"../templates/views"));
const partialpath = (path.join(__dirname,"../templates/partials"));

app.set('view engine','hbs');
app.set('views',viewspath);
hbs.registerPartials(partialpath);
app.use(express.static(staticpath));

app.get("",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{   
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404page',{
        errorMsg:'Oops! Page not found'
    })
})

app.listen(port,()=>{
    console.log(`lishning on ${port}`);
})