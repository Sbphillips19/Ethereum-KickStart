const routes = require('next-routes')();

routes
  .add('/campaigns/new', '/campaigns/new')
  // wildcard/ variable of sorts use : then what we want to pass in
  // second part is what route we want to show
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
