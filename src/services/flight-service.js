const {FlightRepository} = require('../repositories');
const { param } = require('../routes');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const flightRepository = new FlightRepository();
const {Op} = require('sequelize');
async function createFlight(data)
{
    try {
        const flight = await flightRepository.create(data);
        return flight;
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

async function getAllFlights(query)
{
    //trips = BLR-DEL
    let customFilter = {};
    const endingTripTime = ' 23:59:59';
    let sortFilters= [];
    if(query.trips)
    {
        [departureAirportId,arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // console.log(customFilter);
        //if arrival and dept airports are same can have a check
    }
    if(query.price)
    {
        [minPrice,maxPrice] = query.price.split('-');
        customFilter.price  = {
            [Op.between] : [minPrice,(maxPrice == undefined ) ? 15000 : maxPrice]
        }
    }
    if(query.travellers)
    {
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }
    if(query.tripDate)
    {
        customFilter.departureTime ={
            [Op.between] : [query.tripDate,query.tripDate+endingTripTime]
        }
    }
    if(query.sort)
    {
        let params = query.sort.split(',');
        let sortFilter = params.map((p)=>p.split('_'));
        sortFilters = sortFilter;// this assigns the sortFilters array to sortFilter ( [ [ 'departureTime', 'DESC' ], [ 'price', 'ASC' ] ])
        // sortFilters.push(sortFilter);// this includes sortFilter array as an element of another array ( [ [ [ 'departureTime', 'DESC' ], [ 'price', 'ASC' ] ] ])
        // console.log('The sort argument thats passed ',sortFilters)
    }
    try {
        // console.log(customFilter);
        const flight = await flightRepository.getAllFlights(customFilter,sortFilters);
        return flight;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot Fetch the requested Flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    getAllFlights
}