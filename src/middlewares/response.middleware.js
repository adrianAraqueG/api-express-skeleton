/**
 * Response@Middleware
 * erp-aux-api
 * 
 */


/**
 * Este esquema dependerá del estándar de
 * respuestas que quieras configurar
 */
const createResponse = (status, message, data) => {
    return {
        status,
        message,
        response: data ?? []
    };
};

const responseMiddleware = (req, res, next) => {
    res.customResponse = (status, message, data, resCode=200) => {
        const response = createResponse(status, message, data);
        res.status(resCode).json(response);
    };
    next();
};

export default responseMiddleware;