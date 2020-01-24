const { resolve, join } = require('path');

module.exports = (() => {
  const VIEWS = join('src', 'views');
  const TEMPLATE = 'template';

  return {
    TEMPLATE: {
      INDEX: resolve(VIEWS, 'index-view', TEMPLATE, 'index.html'),
      HOME: resolve(VIEWS, 'home-view', TEMPLATE, 'home.html'),
    },
  };
})();
