const express = require('express');
// in the below line object destructuring happens and the PORT is a constant that hold the value of the key : value pair PORT:process.env.PORT
const {ServerConfig,Logger} = require('./config');// no need for './config/index' it automatically pics index.js

const app = express();
const apiRoutes = require('./routes');
const airport = require('./models/airport');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//both above are for reading requests that has request body
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Server is up and running on the port ${ServerConfig.PORT}`);
    // Logger.info({message:'some logging is begin done',error:"some error caught",label :'some label according to us'});
    

    // just for testing and its a bad practice to do this here 
    // const {City,Airport} = require('./models');

    // const bengaluru = await City.findByPk(1);
    // console.log(bengaluru);
    // const ariport = await Airport.create({name:'Kempegowda Intl',code:'BLR'});
    //the above line causes error as cityId cannot be null
    // const ariport = await bengaluru.createAirport({name:'Kempegowda Intl',code:'BLR'});
    // do the above line only once as it gets executed every time the server starts
    // even though we have not defined createAirport function , ORM by default provides some funcitons
    // const hbairport = await bengaluru.createAirport({name:'Hubballi Airport',code :'HBL'});
    // console.log(hbairport);
    // const blrairports = await bengaluru.getAirports();
    // console.log(blrairports);
    // console.log(airport);

    //after all the testing (temporary testing ) remove the async keyword
});

