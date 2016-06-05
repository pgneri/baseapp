define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        Modernizr   = require('modernizr'),
        Handlebars  = require('handlebars'),
        Mainjs      = require('main'),
        ShellView   = require('app/views/shell'),
        LoginView   = require('app/views/login'),

        $body = $('body'),
        shellView = new ShellView({el: $body}).render(),
        $content = $("#pageContent", shellView.el),
        loginView = new LoginView({el: $content});

    // Close the search dropdown on click anywhere in the UI
/*
    $body.click(function () {
        $('.dropdown').removeClass("open");
    });

    $("body").on("click", "#showMeBtn", function (event) {
        event.preventDefault();
        shellView.search();
    });
*/
    return Backbone.Router.extend({

        routes: {
            "": "login",
            "menu": "menu",
            "cadastro": "cadastro"
        },

        login: function () {
            //loginView.delegateEvents(); // delegate events when the view is recycled
            $('#header').hide();
            $('#menu').hide();
            $('#cmpTitulo').hide();
            loginView.render();
            //shellView.selectMenuItem('login-menu');
        },

        cadastro: function () {
            require(["app/views/cadastro"], function (CadastroView) {
                var view = new CadastroView({el: $content});
                $('body').removeClass("login");
                $('body').removeClass("bg");
                $('#header').show();
                $('#cmpTitulo').show();
                view.render();
                //shellView.selectMenuItem('cadastro-menu');
            });
        },

        menu: function () {
            require(["app/views/menu"], function (MenuView) {
                var view = new MenuView({el: $content});
                $('body').removeClass("login");
                $('body').removeClass("bg");
                $('#header').show();
                $('#menu').show();
                $('#cmpTitulo').show();
                view.render();
                //shellView.selectMenuItem('menu-menu');
            });
        },


        addBackEventHandler : function() {
            $('#back').on('click', function(event) {
                window.history.back();
                return false;
            });
        },

        changePage : function(page) {
            page.render();
            $('body').append($(page.el));
            this.addBackEventHandler();
            var transition = $.mobile.defaultPageTransition;
            if (this.firstPage) {
                transition = 'none';
                this.firstPage = false;
            }
            $.mobile.changePage($(page.el), {
                changeHash : false,
                transition : transition
            });
            $(page.el).trigger('create');
        }
    });

});
