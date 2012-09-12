define([
    'backbone'
], function () {
    return Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
        },
        render: function () {
            var music = this.model.get('music');
            var status = music ? 'on' : 'off';
            $('#status', this.el)
                .removeClass('on off')
                .addClass(status)
                .text(status);
        }
    });
});