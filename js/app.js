define([
    'models/Status',
    'views/Switch',
    'views/Display'
], function (Status, Switch, Display) {
    return {
        run: function () {
            var status_model = new Status();
            var switch_view = new Switch({
                model: status_model,
                el: '.input'
            });
            var display_view = new Display({
                model: status_model,
                el: '.output'
            });
        }
    }
});