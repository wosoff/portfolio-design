const indexRoutes = require('./index-routes/index-routes');
const homeRoutes = require('./home-routes/home-routes');
const portfolioRoutes = require('./portfolio-routes/portfolio-routes')

module.exports = [
  ...indexRoutes,
  ...homeRoutes,
  ...portfolioRoutes
];
