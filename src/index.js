const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {
    quantity: req.query.quantity || 0,
    page: req.query.page || 1,
    pages: Math.ceil(req.query.quantity / 3)
}));

app.listen(3333, () => console.log('App running on port 3333'));

//Teste