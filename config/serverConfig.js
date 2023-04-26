const path = require('path');
const jsxRender = require('../utils/jsxRender');

const serverConfig = (app) => {
  app.engine('jsx', jsxRender);
  app.set('view engine', 'jsx');
  app.set('views', path.join(__dirname, '../components'));
};

module.exports = serverConfig;
