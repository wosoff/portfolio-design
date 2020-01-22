const { resolve, join } = require('path');

module.exports = (() => {
  const VIEWS = join('src', 'views');
  const TEMPLATE = 'template';

  return {
    TEMPLATE: {
      INDEX: resolve(VIEWS, 'index-component', TEMPLATE, 'index.html'),
      HOME: resolve(VIEWS, 'home-component', TEMPLATE, 'home.html'),
    },
  };
})();
