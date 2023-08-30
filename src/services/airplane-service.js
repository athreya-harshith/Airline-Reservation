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
        // her we modified to check only for the Client Side Errors and if any other errors
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
        // what ever we throw here it will be received or thrown to the upper layer of it 
        // upper layer or repository is services
        // similarly upper layer of services is controller 
   }
}

module.exports = {
    createAirplane
}