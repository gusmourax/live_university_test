const express = require('express');
const path = require('path');

const app = express();

//Set static directory public
app.use(express.static(__dirname + '/public'));

//Set views directory
app.set('views', path.join(__dirname, '/views/'));

//Set view engine to ejs
app.set('view engine', 'ejs');

//Get / to render the index ejs file
app.get('/', (req, res) => res.render('index', {
    //Number of quantity
    quantity: req.query.quantity || 0,
    //Number of page if exists or 1
    page: req.query.page || 1,
    //Number of total pages
    pages: Math.ceil(req.query.quantity / 3) //Quantity divided by number of elements per page
}));

app.listen(process.env.PORT || 3333);