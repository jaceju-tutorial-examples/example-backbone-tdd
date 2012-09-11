({
    baseUrl: './js',
    name: 'test',
    out: 'test-built.js',
    paths: {
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone',
        'backbone-localstorage': '../libs/backbone-localstorage',
        'jasmine': '../jasmine/jasmine',
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
        'backbone-localstorage': ['backbone'],
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': ['jasmine']
    }
})