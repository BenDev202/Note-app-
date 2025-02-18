const dotenv = require('dotenv');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// static Files

app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./views/server/routers/index'));



app.get('/', (req, res) =>{
    const locals = {
        title: 'NotesApp',
        description: 'Free Notes App To Use',
    }
    res.render('index', locals);
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});
