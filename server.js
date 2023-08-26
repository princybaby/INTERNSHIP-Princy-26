const express = require('express');
const dotenv = require('dotenv');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const path=require('path');
//const mongoose = require('mongoose');
const connectDB=require('./server/database/connection');

const app = express();
dotenv.config({path:'config.env'})
const port=8080;

app.use(express.static('public'));

app.use(morgan('tiny'));

connectDB();

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require('./server/routes/router'))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//app.listen(8080,()=>{console.log('server is running on http:///localhost:${8080}')});