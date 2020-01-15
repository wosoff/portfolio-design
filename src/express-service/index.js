const express = require('express');
const createRouter = require('./create-router');
const listenHTTP = require('./listen-http');
const listenHTTPS = require('./listen-https');
const mountMiddleware = require('./mount-middleware');
const useRouter = require('./use-router');
const addRoutes = require('./add-routes');

const ExpressService = (() => {
  const app = express();

  mountMiddleware(app);

  const innerListenHTTP = listenHTTP(app);
  const innerListenHTTPS = listenHTTPS(app);
  const innerAddRoutes = addRoutes(app);
  const innerUseRouter = useRouter(app);

  return {
    createRouter,
    listenHTTP: innerListenHTTP,
    listenHTTPS: innerListenHTTPS,
    addRoutes: innerAddRoutes,
    useRouterModule: innerUseRouter,
  };
})();

module.exports = ExpressService;
