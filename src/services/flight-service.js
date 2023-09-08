const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const flightRepository = new FlightRepository();

async function createFlight(data)
{
    try {
        const city = await flightRepository.create(data);
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

        throw new AppError('Cannot Create a new Flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
}