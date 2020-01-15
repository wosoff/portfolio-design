const indexMiddleware = require('./index-middleware')

module.exports = [
  {
    method: 'get',
    path: '/index',
    middleware: indexMiddleware
  },
];
