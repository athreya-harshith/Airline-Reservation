const {AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const airportRepository = new AirportRepository();

async function createAirport(data)
{
    try {
        const city = await airportRepository.create(data);
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

        throw new AppError('Cannot Create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirport(id)
{
    try {
        const city = await airportRepository.destroy(id);
        return city;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Unable to delete the requested Airport as the Airport doesnot exists',error.statusCode);
        }
        throw new AppError('Cannot able to delete the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,data)
{
    try {
        const response = await airportRepository.update(id,data);
        return response;
    } catch (error) {
        // console.log(error);
        // console.log(error.table,error.fields);
        if(error.name == 'SequelizeForeignKeyConstraintError')
        {
            let explanation = [];
            explanation.push('Foreign Key Constraint Fails for the following fields '+error.fields+' from table '+error.table)
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Unable to update the Airport as the Airport requested doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot able to update the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports()
{
    try {
        const cities = await airportRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Unable to fetch the Airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id)
{
    try {
        const city = await airportRepository.get(id);
        return city;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Requested Airport doesnot exists ',error.statusCode);
        }
        throw new AppError('Unable to get the requested Airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    destroyAirport,
    updateAirport,
    getAirports,
    getAirport
}