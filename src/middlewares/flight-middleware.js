const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const {CompareTime} = require('../utils/helpers');
function validateCreateRequest(req,res,next)
{
    ErrorResponse.message = 'Something went wrong while creating Flight';
    if(!req.body.flightNumber)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (flightNumber not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (airplaneId not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
   
    if(!req.body. departureAirportId)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request ( departureAirportId not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.arrivalAirportId)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (arrivalAirportId not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.arrivalTime)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request ( arrivalTime not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (departureTime not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request ( price not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.totalSeats)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request ( totalSeats not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

let helperMiddlewares = [];
function checkTimes(req,res,next)
{
    if(!CompareTime.compareTimes(req.body.arrivalTime,req.body.departureTime))
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (Arrival Time must be Greater than the Departure Time not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
    
}
helperMiddlewares.push(checkTimes);//check this that middlewares can be made as array elements and that array can be used to in routes by exporting the array
module.exports = {validateCreateRequest,helperMiddlewares}