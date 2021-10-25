const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const DB   = 'mongodb://localhost/notasapp';

mongoose.connect(DB).then(() => console.log('DB conectada'));

const app = express();
// para que aparezca algo en req.body
app.use(express.json());

app.use('/', require('./api/note'));

app.use(express.static('public'));

app.listen(PORT);
