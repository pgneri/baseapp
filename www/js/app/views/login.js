define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        Vendor      = require('vendor'),
        Mainjs      = require('main'),
        tpl         = require('text!tpl/Login.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());
            return this;
        }

    });

});
