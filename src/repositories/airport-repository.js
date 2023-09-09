const CrudRepository = require('./crud-repository');
const {Airport} = require('../models');
class AirportRepository extends CrudRepository
{
    constructor()
    {
        super(Airport);
    }

    async getAllAirport(filter)
    {
        const response = await Airport.findAll({
            where:filter
        });
        return response;
    }
}
module.exports = AirportRepository;