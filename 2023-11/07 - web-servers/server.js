const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
// app.use((req, res, next) => {
//     // user:password
//     if (req.header('Authorization') !== 'Basic dXNlcjpwYXNzd29yZA==') {
//         res.header('WWW-Authenticate', 'Basic');
//         res.sendStatus(401);
//     } else {
//         req.user = 'user';
//         next()
//     }
// });
app.use('/static', express.static('static'))
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(new Date().toISOString());
    next();
});
const cache = {};
const cachingMw = (req, res, next) => {

    if(cache[req.url]) {
        console.log('SERVING CACHE');
        res.send(cache[req.url])
    } else {
        next();
    }
};
const loggingMw = (req, res, next) => {
    req.surprize = 43;
    next();
};
const getUsers = (req, res) => {
    console.log('PREPARING CACHE');
    cache[req.url] = JSON.stringify([req.surprize, req.user]);
    res.send(cache[req.url]);
};
app.get('/data', (req,res) => {
    res.write('<html>')
    res.write('<body>')
    res.write('<p>Привет!</p>')
    res.write('<input/>')
    res.write('</body>')
    res.end('</html>')
});
app.get('/lol', (req, res) => {
    res.send(400 + 4);
})
app.get('/txt', (req, res) => {
    const rs = fs.createReadStream('./txt.txt');

    rs.pipe(res);
})
app.get('/person', cachingMw, loggingMw, getUsers);
app.get('/person/:id/:view', (req, res) => res.send({ name: 'Ivan', id: req.params.id }));
app.get('/:region/catalog/:id', (req, res) => res.send({ region: req.params.region, id: req.params.id }));
app.post('/post', (req,res) => {
    console.log(req.query);
    res.send(req.body);
} )
app.listen(3000);
