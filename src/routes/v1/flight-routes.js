const express = require('express');
const router= express.Router();
const {FlightController} = require('../../controllers');
const {FlightMiddlewares} = require('../../middlewares');
// /api/v1/flights
router.post('/',FlightMiddlewares.validateCreateRequest,FlightMiddlewares.helperMiddlewares,FlightController.createFlight);
// /api/v1/flights?trips=BLR-DEL
router.get('/',FlightController.getAllFlights);
module.exports = router;