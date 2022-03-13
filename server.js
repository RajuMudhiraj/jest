const express = require('express');
const app = express();
const jest = require('jest')

app.use(express.json())

app.use('/', require('./app/routes/index'))



app.listen(3000, () => { console.log('Server is listening on port 3000') })