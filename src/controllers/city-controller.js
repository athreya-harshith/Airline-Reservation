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

module.exports = {
    createCity
}