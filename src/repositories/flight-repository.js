const CrudRepository = require('./crud-repository');
const {Flight,Airplane,Airport,City} = require('../models');
const {Sequelize} = require('sequelize');
class FlightRepository extends CrudRepository
{
    constructor()
    {
        super(Flight);
    }
    async getAllFlights(filter,sort)
    {
        const response = await Flight.findAll({
            where:filter,
            order:sort,
            include:[
                {
                    model:Airplane,
                    required:true,
                    as:'airplaneDetail'
                },
                {
                    model:Airport,
                    as:'departureAirport',// must define this alias in the corresponding model as well (in flights model)
                    required:true,
                    on:
                    {
                        col1:Sequelize.where(Sequelize.col('Flight.departureAirportId'),'=',Sequelize.col('departureAirport.code'))
                    },
                    include:{
                        model:City,
                        required:true
                    }
                },
                {
                    model:Airport,
                    as:'arrivalAirport',
                    required:true,
                    on:
                    {
                        col1:Sequelize.where(Sequelize.col('Flight.arrivalAirportId'),'=',Sequelize.col('arrivalAirport.code'))
                    },
                    include:{
                        model:City,
                        required:true
                    }
                }
            ]
        });
        // console.log(response);
        return response;
    }
}
module.exports =  FlightRepository;