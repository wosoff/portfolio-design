const { respondGIFImage, respondVideoMP4 } = require('./portfolio-middleware');

module.exports = [
  {
    method: 'get',
    path: '/portfolio/banner/:name',
    middleware: [
      respondGIFImage,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/video/:name',
    middleware: [
      respondVideoMP4,
    ],
  },
];
