const expressService = require('./express-service');
const routes = require('./routes');

expressService.listenHTTPS();

expressService.addRoutes(routes);
