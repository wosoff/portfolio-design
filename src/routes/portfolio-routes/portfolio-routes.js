const { respondGIFImage, respondVideoMP4, respondSiteJPGImages } = require('./portfolio-middleware');

module.exports = [
  {
    method: 'get',
    path: '/portfolio/index',
    middleware: [
      respondGIFImage,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/banner/:name',
    middleware: [
      respondGIFImage,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/site/:name',
    middleware: [
      respondSiteJPGImages,
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
