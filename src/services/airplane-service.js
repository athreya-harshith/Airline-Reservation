const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const ariplaneRepository = new AirplaneRepository();

async function createAirplane(data)
{
   try
   {
        const airplane = await ariplaneRepository.create(data);
        return airplane;
   }
   catch(error) 
   {
     // this error is received by the repository layer
    // uncomment this line to check error     //console.log(error);
        // have modified to check only for the Client Side Errors and if any other errors
        //except client side error will be thown as Server error by the throw statement after the if block
        if(error.name == 'SequelizeValidationError')
        {
           let explanation = [];
           error.errors.forEach((err)=>
           {
               explanation.push(err.message);
           });
           console.log(explanation);
           throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot Create a new Airplane Object',StatusCodes.INTERNAL_SERVER_ERROR);
        // what ever is thrown here it will be received or thrown to the upper layer of it 
        // upper layer of repository is services
        // similarly upper layer of services is controller 
   }
}
async function getAirplanes()
{
    try {
        const airplane = await ariplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError('Unable to get the airplanes ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id)
{
    try {
        const airplane = await ariplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Requested Airplane doesnot exists ',error.statusCode);
        }
        throw new AppError('Unable to get the requested Airplace',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id)
{
    try {
        const response = await ariplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Unable to delete the requested Airplane as the Airplane doesnot exists',error.statusCode);
        }
        throw new AppError('Cannot able to delete the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function upadateAirplane(id,data)
{
    try {
        const response = await ariplaneRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Unable to update the airplane as the ariplane requested doesnot request',error.statusCode);
        }
        throw new AppError('Cannot able to update the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    upadateAirplane
}