/**
 * HttpHandlerError@Middleware
 * your-app-name
 * 
 */
import HttpCustomError from '../../utils/HttpCustomError.js';


const httpHandlerError = async (err, req, res, next) => {
    try {
        if (err instanceof HttpCustomError.CustomError) {
            res.customResponse(false, err.message, null, err.statusCode)
        } else {
            res.customResponse(false, 'Interal Server Error', null, 500);
        }
    } catch (error) {
        console.error('Async error:', error);
        res.customResponse(false, 'Interal Server Error', null, 500);
    }
};


export default httpHandlerError;