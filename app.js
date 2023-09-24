const express = require('express');
const app = express();
const authRoute = require('./router/authRoute');
const databaseconnect = require('./config/databaseConnect');
const cookieParser = require('cookie-parser');
const cors = require('cors')
databaseconnect();

app.use(express.json());
app.use(cookieParser());   //Parse before going to any route
app.use(cors ({
    origin: [process.env.CLIENT_URL]
    ,credentials: true
}))

app.use('/api/auth/',  authRoute);



app.use('/', (req, res)=>{
    res.status(200).json({data : 'JW server.'});
})

module.exports = app;