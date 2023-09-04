const {CityService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse,SuccessResponse} =require('../utils/common');

async function createCity(req,res)
{
    try {
        const city = await CityService.createCity({
            name:req.body.name
        })
        SuccessResponse.message = 'Successfully Created A City';
        SuccessResponse.data = city;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message ='Something went wrong while creating City'
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function destroyCity(req,res)
{
    try {
        const response = await CityService.destroyCity(req.params.id);
        SuccessResponse.message = 'Successfully deleted the city';
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function updateCity(req,res)
{
    try {
        const response = await CityService.updateCity(req.params.id,{name:req.body.name});
        SuccessResponse.message = 'Successfully Updated the City';
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Cannot Proccess the Request'
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createCity,
    destroyCity,
    updateCity
}