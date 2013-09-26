/**
 * Add dependencies to the app sandbox, load
 * configuration and bootstrap data, and initialize the app.
 */

var
  // Polyfill old browsers
  /*jshint unused:false*/
  shim = require('es5-shim'),


  // Load the app framework.
  app = require('tinyapp'),

  // Environment / app configuration settings. You can
  // change the name of these globals to suit the needs
  // of your app.
  environment = window.environment || {},

  // A data payload bootstrapped into the global namespace
  // by the server. This can save on latency from an
  // extra get request. Only bootstrap data that you need
  // at initial render time.
  pageData = window.pageData || {};

app.init({
  environment: environment,
  pageData: pageData
});

module.exports = app;
