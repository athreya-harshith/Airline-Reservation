const {StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req,res,next)
{
    ErrorResponse.message = 'Something went wrong while creating Airplane';
    ErrorResponse.error = {explanation:'Improper Format Of the data in incoming Request (modelNumber not found) '};
    if(!req.body.modelNumber)
    {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {validateCreateRequest}