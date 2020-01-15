const express = require('express');

/** @typedef {{method: string, path: string, middleware:function[]}[]} routes */
/**
 * @param {routes} routes
 * @returns {import('express').Router}
 */
function createRouter(routes) {
  const router = express.Router();

  routes.forEach((route) => {
    const { method, path, middleware } = route;

    if (method === 'get') {
      router.get(path, middleware);
      return;
    }

    if (method === 'post') {
      router.post(path, middleware);
    }
  });

  return router;
}

module.exports = createRouter;
