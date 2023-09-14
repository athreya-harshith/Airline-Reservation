const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers');
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes')
// route.get('/info',(req,res)=>{
//     res.send({msg:"OK"});
// }); this is not compact one as there is a better implementation of this controller 
//  by writing this in the controller module and importing it into here
 router.get('/info', InfoController.info);
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports',airportRoutes);
router.use('/flights',flightRoutes);
module.exports = router;
