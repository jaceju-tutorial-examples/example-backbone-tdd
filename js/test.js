require.config({
    paths: {
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone',
        'jasmine': '../jasmine/jasmine',
        'jasmine-jquery': '../jasmine/jasmine-jquery',
        'jasmine-html': '../jasmine/jasmine-html'
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
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-jquery': ['jasmine'],
        'jasmine-html': ['jasmine']
    }
});

define([
    'test-runner'
], function(TestRunner) {
    TestRunner.run();
});
