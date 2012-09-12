define([
    'models/Status',
    'views/Switch',
    'views/Display'
], function (Status, Switch, Display) {

    describe("Status", function() {

        var status_model;

        beforeEach(function () {
            status_model = new Status();
        });

        it('變更 status_model 的狀態', function () {
            expect(status_model.get('music')).toEqual(false);
            status_model.set('music', true);
            expect(status_model.get('music')).toEqual(true);
        });
    });

    describe("Status + Switch", function() {

        var status_model;
        var switch_view;
        var switch_dom;

        beforeEach(function () {
            status_model = new Status();
            switch_view = new Switch({
                model: status_model,
                el: '.input'
            });
            switch_dom = $('#switch');
        });

        it('透過 switch 變更 status_model 的狀態', function () {
            expect(status_model.get('music')).toEqual(false);
            setTimeout(function () {
                switch_dom.trigger('click');
                expect(status_model.get('music')).toEqual(true);

                switch_dom.trigger('click');
                expect(status_model.get('music')).toEqual(false);
            }, 0);
        });
    });

    describe("Status + Display", function () {
        var status_model;
        var display_view;
        var display_dom;

        beforeEach(function () {
            status_model = new Status();
            display_view = new Display({
                model: status_model,
                el: '.output'
            });
            display_dom = $('#status');
        });

        it('用文字顯示 status', function () {
            status_model.set('music', false);
            console.log(display_dom.text());
            expect(display_dom.text()).toEqual('off');

            status_model.set('music', true);
            console.log(display_dom.text());
            expect(display_dom.text()).toEqual('on');
        });
    });

    describe("Status + Display", function () {

        var status_model;
        var switch_view;
        var switch_dom;
        var display_view;
        var display_dom;

        beforeEach(function () {
            status_model = new Status();
            switch_view = new Switch({
                model: status_model,
                el: '.input'
            });
            switch_dom = $('#switch');
            display_view = new Display({
                model: status_model,
                el: '.output'
            });
            display_dom = $('#status');
        });

        it('隱藏 status_model', function () {
            setTimeout(function () {
                switch_dom.trigger('click');
                expect(display_dom.text()).toEqual('off');

                switch_dom.trigger('click');
                expect(display_dom.text()).toEqual('on');
            }, 0);
        });
    });
});