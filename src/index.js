const express = require('express');
// in the below line object destructuring happens and the PORT is a constant that hold the value of the key : value pair PORT:process.env.PORT
const {ServerConfig,Logger} = require('./config');// no need for './config/index' it automatically pics index.js

const app = express();
const apiRoutes = require('./routes');
const airport = require('./models/airport');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//both above are for reading requests that has request body
app.use('/api',apiRoutes);//entry point for all api routes
// app.use('/flightsService/api',apiRoutes);// this is commented because , pathRewrite object in the API gateway rewrites the path
app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is up and running on the port ${ServerConfig.PORT}`);
    // Logger.info({message:'some logging is begin done',error:"some error caught",label :'some label according to us'});
});

