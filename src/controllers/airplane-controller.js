const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SuccessResponse} =require('../utils/common')
/*
    out request will be in form of 
     POST : /airplanes
     req-body {modelNumber:'aribusA320', capacity:200,....}
*/

async function createAirplane(req,res)
{
    try
    {
        console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.message = 'Successfully Created An Airplane';
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    }
    catch(error)
    {
        ErrorResponse.message ='Something went wrong while creating Airplane'
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = {createAirplane};