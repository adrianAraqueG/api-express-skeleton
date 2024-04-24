/**
 * App@your-app-name
 * 
 */
import Express from "express";
import Config from "./config/environment.js";
import Cors from "cors";
import Helmet from "helmet";
import HttpHandlerError from "./middlewares/handlersErrors/httpHandlerError.middleware.js";
import CustomResponse from "./middlewares/response.middleware.js";

class App {
    constructor() {
        /**
         * Configuración Inicial
         */
        this.PORT = Config.PORT;
        this.App = Express();
        
        this.App.use(CustomResponse);
        this.App.use(Express.json());
        this.App.use(Express.urlencoded({ extended: true }));
        this.App.use(Cors());
        this.App.use(Helmet());

        /** Routing */

        /** Catcher Final */
        this.App.use(HttpHandlerError);
    }

    /**
     * App@Métodos
     */
    listen() {
        this.App.listen(this.PORT, () => {
            console.log(`-> erp-aux-api \n-> Running on ${this.PORT}`);
        });
    }
}

export default App;