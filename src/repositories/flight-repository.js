const CrudRepository = require('./crud-repository');
const {Flight,Airplane,Airport,City} = require('../models');
const {Sequelize} = require('sequelize');
const db = require('../models');// to execute a raw qurey
const {addRowLockOnFlights} = require('./queries');
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

    async updateRemainingSeats(flightId,seats,decrease=1)
    {
        const transaction = await db.sequelize.transaction();
        try {
        await db.sequelize.query(addRowLockOnFlights(flightId)); // FOR UPDATE applys a row level lock for the row with flightId mentioned
        const flight = await Flight.findByPk(flightId);
        let flag = parseInt(decrease);
        console.log('flag value as seen',flag);
       if(flag)
            await flight.decrement('totalSeats',{by:seats},{transaction:transaction});// the whole thing is executed as one complete transaction
        else
            await flight.increment('totalSeats',{by:seats},{transaction:transaction});// the whole thing is executed as one complete transaction
        await transaction.commit();
        return flight;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
        
    }
}
module.exports =  FlightRepository;