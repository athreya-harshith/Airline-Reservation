const {AirplaneRepository} = require('../repositories');

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
        throw error;
   }
}

module.exports = {
    createAirplane
}