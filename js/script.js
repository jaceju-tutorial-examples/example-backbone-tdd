require.config({
    paths: {
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define([
    'app'
], function(App) {
    App.run();
});
