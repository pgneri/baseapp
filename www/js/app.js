require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl',
		jquery: "jquery",
		underscore: "underscore",
		backbone: "backbone",
        handlebars: "handlebars",
        modernizr :"modernizr",
        vendor  : "vendor",
        main : "main"
    },
/*
    map: {
        '*': {
            'app/models/employee': 'app/models/memory/employee'
        }
    },
*/
    shim: {
		jquery: {
		  exports: "$"
		},
		underscore: {
		  exports: "_"
		},
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        handlebars: {
            exports: "Handlebars"
        }
    }
});

require(['jquery', 'backbone', 'handlebars', 'app/router'], function ($, Backbone, Handlebars, Router) {
    var router = new Router();
    Backbone.history.start();
});
