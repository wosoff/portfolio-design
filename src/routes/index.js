const indexRoutes = require('./index-routes/index-routes');
const homeRoutes = require('./home-routes/home-routes');

module.exports = [
  ...indexRoutes,
  ...homeRoutes,
];
