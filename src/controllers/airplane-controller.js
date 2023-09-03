const {AirplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SuccessResponse} =require('../utils/common');
const { json } = require('sequelize');
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
        // the error object received here is the one that is thrown by the service layer
        ErrorResponse.message ='Something went wrong while creating Airplane'
        ErrorResponse.error = error;
        // previously  did like this here status code is hard coded 
        // here throwing an error object with some error code in the service layer
        // this contains the error code hence we utilize it 
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function getAirplanes(req,res)
{
    try {
        const airplane = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
/*
 GET /api/v1/airplanes/:id
 req.body = {}
 */
async function getAirplane(req,res)
{
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyAirplane(req,res)
{
    try {
        const response = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function upadateAirplane(req,res)
{
    try {
        const response = await AirplaneService.upadateAirplane(req.params.id,req.body);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {createAirplane,getAirplanes,getAirplane,destroyAirplane,upadateAirplane};