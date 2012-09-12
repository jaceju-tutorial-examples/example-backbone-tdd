define([
    'backbone'
], function () {
    return Backbone.View.extend({
        events: {
            'click #switch': 'toggleMusic'
        },
        toggleMusic: function (e) {
            this.model.set('music', $(e.target).prop('checked'));
        }
    });    
});