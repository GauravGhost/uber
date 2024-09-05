const { ENV } = require("../config/serverConfig");
const { ErrorResponseHandler } = require("../utils/response");

// Send response on errors
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (!statusCode) {
        statusCode = 500;
    }
    res.locals.errorMessage = err.message;

    if (ENV === "development") {
        console.error(err);
    }
    
    return ErrorResponseHandler(req, res, statusCode, message, "Something went Wrong");
};

module.exports = {
    errorHandler,
};