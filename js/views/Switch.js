define([
    'backbone'
], function () {
    return Backbone.View.extend({
        events: {
            'change #switch': 'toggleMusic'
        },
        toggleMusic: function (e) {
            this.model.set('music', $(e.target).prop('checked'));
        }
    });
});