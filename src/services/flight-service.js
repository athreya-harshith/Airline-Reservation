const {FlightRepository,AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const flightRepository = new FlightRepository();
const airportRepository = new AirportRepository();
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
        // retrieve the airports based on airport id and return it 
        return flight;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot Fetch the requested Flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getFlight(id)
{
    try {
        // console.log(id);
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Requested Flight doesnot exists ',error.statusCode);
        }
        throw new AppError('Unable to get the requested Flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function updateSeats(data)
{
    try {
        console.log('data.decrease as seen',data.decrease);
        const response = await flightRepository.updateRemainingSeats(data.flightId,data.seats,data.decrease)
        return response;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot Update the seats',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirportDetails(code)//not used 
{
    let customFilter = {};
    customFilter.code = code;
    try {
        const airport = await airportRepository.getAllAirport(customFilter);
        // console.log(airport);
        return airport;
    } catch (error) {
        throw new AppError('Cannot Fetch the requested Flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
   
}
module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}