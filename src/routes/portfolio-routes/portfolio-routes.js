const { respondIndexPost } = require('./portfolio-middleware');

module.exports = [
  {
    method: 'get',
    path: '/portfolio/banner/:name',
    middleware: [
      respondIndexPost,
    ],
  },
];
