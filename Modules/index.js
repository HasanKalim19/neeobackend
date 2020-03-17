const user = require('./User/router');

const ROUTERS = [ user ];

const registerRouters = (app) => ROUTERS.map((router) => app.use(router));

module.exports = registerRouters;
