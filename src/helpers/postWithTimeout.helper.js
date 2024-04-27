/**
 * POSTWithTimeout@Helpers
 * your-app-name
 * 
 */
import HttpCustomError from "../utils/HttpCustomError.js";


const postWithTimeout = async (url, data, jwt, timeout = 7000) => {
    const fetchPromise = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt || 'Token'}`,
        },
        body: JSON.stringify(data),
    });

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new HttpCustomError.GatewayTimeoutError()), timeout)
    );

    try {
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        
        
        /**
         * Esta configuración dependerá del esquema
         * de la respuesta que esperas. Si realizas
         * peticiones a diferentes aplicaciones sin
         * una convención única de respuestas debes 
         * realizar este mapeo en el servicio 
         * (u otro lugar) donde utilices este módulo.
         */
        const statusCode = response.status;
        const result = await response.json();
        result.statusCode = statusCode;
        

        return result;
        
    } catch (error) {
        if(error.message.startsWith('Unexpected')){
            throw new HttpCustomError.BadGatewayError();
        }else{
            throw error;
        }
    }
}

export default postWithTimeout;
