const {AirportService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SuccessResponse} =require('../utils/common');
const { json } = require('sequelize');

async function createAirport(req,res)
{
    try {
        const airport = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId:req.body.cityId
        });

        SuccessResponse.message = 'Successfully Created the Airport';
        SuccessResponse.data = airport;
         return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while creating the Airport'
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyAirport(req,res)
{
    try {
        // id must be accessed using req.params as its sent in the url
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.message = 'Successfully deleted the Airport';
        SuccessResponse.data = airport;
        
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Unable to Delete the Airport';
        ErrorResponse.data = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirports(req,res)
{
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.message = 'Successfully Fetched All the Airports';
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Unable to fetch all the Airports';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function getAirport(req, res)
{
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.message = 'Successfully Fetched the Airport';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Unable to fetch the Airport';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirport(req,res)
{
    try {
        const airport = await AirportService.updateAirport(req.params.id,req.body);
        SuccessResponse.message = 'Successfully Updated the Airport';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Unable to Update the Airport';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    destroyAirport,
    updateAirport,
    getAirports,
    getAirport
}