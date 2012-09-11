define([
    'models/Todo',
    'backbone-localstorage'
], function (Todo) {
    return Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage('MyTodo')
    });
});