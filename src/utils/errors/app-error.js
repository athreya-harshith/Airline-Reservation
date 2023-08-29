class AppError extends Error
{
    constructor(message, StatusCode)
    {
        super(message);
        this.explanation = message;
        this.StatusCode = StatusCode;
    }
}
// we have captureStackTrace() method thats used to write down all the errors
module.exports = AppError;