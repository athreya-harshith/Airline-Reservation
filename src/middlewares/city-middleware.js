const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req,res,next)
{
    ErrorResponse.message = 'Something went wrong while creating City';
    ErrorResponse.error = new AppError(['Improper Format Of the data in incoming Request (name not found) '],StatusCodes.BAD_REQUEST);
    if(!req.body.name)
    {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {validateCreateRequest}