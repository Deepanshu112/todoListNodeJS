class errorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddlewares = (err, req, res, next) => {

    err.message = err.message || "Internal error";
    err.statusCode = err.statusCode || "Internal error";

    return res.status(404).json({
        success: false,
        message: "Invalid Id",
    });
};

export default errorHandler;