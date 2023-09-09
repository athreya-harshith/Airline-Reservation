const {FlightService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SuccessResponse} =require('../utils/common');
const { json } = require('sequelize');
/** 
 * req.body {
 * flightNumber:'IN 101',
 * airplaneId:12,
 * departureAirportId:BLR,
 * arrivalAirportId:DEL,
 * arrivalTime:'08:15:00',
 * departureTime:'13:00:00',
 * price:12000,
 * boardingGate:'32D',
 * totalSeats:242
 * }
 */
async function createFlight(req,res)
{
    try {
        const flight = await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
        });

        SuccessResponse.message = 'Successfully Created the Flight';
        SuccessResponse.data = flight;
         return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while creating the Flight'
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlights(req,res)
{
    try {
        // console.log(req.query);
        const flight = await FlightService.getAllFlights(req.query);
        SuccessResponse.message = 'Successfully Fetched the Flight';
        SuccessResponse.data = flight;
         return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while Fetching the Flight'
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights
}