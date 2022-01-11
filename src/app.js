// https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=e8d6a54ea3e8884f7f52a3c5dbc19fbf

const path = require('path');
const hbs = require('hbs');
const express = require('express');
const exp = require('constants');
const app = express();

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('error404', {
        errMessage : 'Oops..Page Not Found !'
    });
});

app.listen(port, (err) => {
    console.log("Listening the port number ",port);
});