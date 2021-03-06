/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'appart',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['g-map'] = {
    libraries: ['places', 'geometry'],
    key: 'AIzaSyDP4WveMLJSZZvbO4BI_PkXYlMdMAQGDgo',
    language: "fr",
    protocol: 'https'
  };
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseUrl = '/appart/';
    ENV['g-map'] = {
      libraries: ['places', 'geometry'],
      key: 'AIzaSyDDjh-n_4it65O7dOhXfA_gEixFTVwS648',
      language: "fr",
      protocol: 'https'
    };
  }

  

  return ENV;
};
