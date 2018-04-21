'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new')
// wildcard/ variable of sorts use : then what we want to pass in
// second part is what route we want to show
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QjtBQUVFO0FBQ0EsQUFIRjtDQUlHLEFBSkgsSUFJTyxBQUpQLHVCQUk4QixBQUo5QixtQkFLRyxBQUxILElBS08sQUFMUCxnQ0FLdUMsQUFMdkMsNkJBTUcsQUFOSCxJQU1PLEFBTlAsb0NBTTJDLEFBTjNDOztBQVFBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXBoZW5waGlsbGlwcy9EZXNrdG9wL1VkZW15L015UHJvamVjdHMva2lja3N0YXJ0In0=