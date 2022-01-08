const express = require("express");
const path = require("path");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 1000;


//static files paths
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

//const staticPath = path.join(__dirname, "../public");
//app.use(express.static(staticPath));


//const templatePath = path.join(__dirname, "../templates/views")  //new added can remove not permanent
//const partialsPath = path.join(__dirname, "../templates/partials");


//set views or templating engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts); 
//app.set('layout', './layouts/full-width'); //static enviroment created and now removed for not creating confusion


//template engine route or navigation
app.get("/", (req, res) => {
 res.render("index", {
       title: "weatherWEB",
       layout: './layouts/full-width',
       text: "Hello, this is ejs",
        channelName: "suyash",
        hellYeah: "sexy hai bhai nodejs ekdum"
   });
});
app.get("/about", (req, res) => {
    res.render("about_body", {
        title: "weatherWEB",
        layout: './layouts/about',
       mongo: "Hello, this is the about page of ejs",
        myName: "suyashSuyashSUYASH",
        hellYeah: "sexy hai bhai nodejs ekdum"
    });  
}); 
app.get("/weather", (req, res) => {
    res.render("weather_body", {
        title: "weatherWEB",
        layout: './layouts/weather',
       mongo: "Hello, this is the weather page of ejs",
        myName: "suyashSuyashSUYASH",
        hellYeah: "sexy hai bhai nodejs ekdum"
    });  
}); 

app.get("", (req, res) => {
    res.send("hello from the express server"); 
});
app.get("/about", (req, res) => {
    res.send("hello from the express server to about page");
});
 


/* 
//built in middleware Or kisi bhi page me redirect kr sakte hai easily with the code below
//console.log(path.join(__dirname, "../C:/Users/suyas/OneDrive/Desktop/COOLSTUFFS/USEFULLTHINGS/main.html"));
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath));


app.get("/server", (req, res) => {
    res.send("hello from the express server");
});
 */
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});








