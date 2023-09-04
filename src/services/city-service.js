const e = require('express');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const cityRepository = new CityRepository();

async function createCity(data)
{
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError')
        {
           let explanation = [];
           error.errors.forEach((err)=>
           {
               explanation.push(err.message);
           });
           console.log(explanation);
           throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot Create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id)
{
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Unable to delete the requested City as the City doesnot exists',error.statusCode);
        }
        throw new AppError('Cannot able to delete the City',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id,data)
{
    try {
        const response = await cityRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Unable to update the city as the city requested doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot able to update the city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createCity,
    destroyCity,
    updateCity
}