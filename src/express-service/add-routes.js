/** @typedef {{method: string, path: string, middleware:function[]}[]} routes */

/**
 * @param {import('express').Application | import('express').Router} app
 * @returns {(routes: routes) => import('express').Application | import('express').Router}
 */
function addRoutes(app) {
  /**  @type {routes} */
  let routesStack = [];

  return function innerAddRoutes(routes) {
    routesStack = [
      ...routesStack,
      ...routes,
    ];

    routesStack.forEach((route) => {
      const { method, path, middleware } = route;

      if (method === 'get') {
        app.get(path, middleware);
        return;
      }

      if (method === 'post') {
        app.post(path, middleware);
      }
    });

    return app;
  };
}

module.exports = addRoutes;
