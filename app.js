const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');  

const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(port, ()=> console.log(`Listening to port ${port}`));
/*
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.render('index'); // Renders index.ejs
});
*/