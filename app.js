const express = require('express');
const app = express();
const authRoute = require('./router/authRoute');
const databaseconnect = require('./config/databaseConnect');

databaseconnect();

app.use(express.json());
app.use('/api/auth/', authRoute);


app.use('/', (req, res)=>{
    res.status(200).json({data : 'JW server.'});
})

module.exports = app;