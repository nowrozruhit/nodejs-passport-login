const express = require('express');
const app = express();

app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {username: 'John'});
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {

});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) => {

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));