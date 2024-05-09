/**
 * Main@your-app-name
 * YourName
 * 
 */
import App from "./app.js";

process.on('uncaughtException', stream => console.log(stream));
process.on('unhandledRejection', stream => console.log(stream));

const service = new App();
service.listen();