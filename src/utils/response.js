const errorResponse = {
    success: false,
    message: "Something went wrong",
    data: {},
    error: {}
}

const successResponse = {
    success: true,
    message: "Successfully completed the request",
    data: {},
    error: {}
}

function SuccessResponseHandler(req, res, status, data, message) {
    successResponse.data = data;
    successResponse.message = message || successResponse.message;
    return res.status(status).json(successResponse);
}

function ErrorResponseHandler(req, res, status, error, message) {
    errorResponse.error = error;
    errorResponse.message = message || errorResponse.message;
    return res.status(status).json(errorResponse);
}



module.exports = {
    SuccessResponseHandler,
    ErrorResponseHandler
};