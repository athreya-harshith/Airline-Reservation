const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req,res,next)
{
    ErrorResponse.message = 'Something went wrong while creating Airport';
    if(!req.body.name)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (name not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (code not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    // as address can be null no need to check address in middleware
    // if(!req.body.address)
    // {
    //     ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (address not found) '],StatusCodes.BAD_REQUEST);
    //     return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    // }
    if(!req.body.cityId)
    {
        ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (cityId not found) '],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {validateCreateRequest}