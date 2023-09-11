const express = require('express');
const router= express.Router();
const {FlightController} = require('../../controllers');
const {FlightMiddlewares} = require('../../middlewares');
// /api/v1/flights
router.post('/',FlightMiddlewares.validateCreateRequest,FlightMiddlewares.helperMiddlewares,FlightController.createFlight);
// /api/v1/flights?trips=BLR-DEL
router.get('/',FlightController.getAllFlights);
router.get('/:id',FlightController.getFlight);
// /api/v1/flights/:id/seats PATCH
router.patch('/:id/seats',FlightMiddlewares.validateUpdateSeatsRequest,FlightController.updateSeats);
module.exports = router;