/**
 * @see express-routing https://expressjs.com/en/guide/routing.html
 *
 * @param {import('express').Application} app
 * @returns {(root: string, routerModule: import('express').Router) => void}
 */
function useRouter(app) {
  /**
   * @param {string} root
   */
  return function innerUseRouter(root, routerModule) {
    app.use(root, routerModule);
  };
}

module.exports = useRouter;
