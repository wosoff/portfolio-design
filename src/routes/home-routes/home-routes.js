const { respondIndexPost } = require('./home-middleware');

module.exports = [
  {
    method: 'get',
    path: '/home',
    middleware: [
      respondIndexPost,
    ],
  },
];
