define([
    'models/Status',
    'views/Switch',
    'views/Display'
], function (Status, Switch, Display) {

    describe("只有狀態物件", function() {

        var status_model;

        beforeEach(function () {
            status_model = new Status();
        });

        it('當改變狀態物件的 music 值後，重新取得的值應該是設定後的值', function () {
            expect(status_model.get('music')).toEqual(false);
            status_model.set('music', true);
            expect(status_model.get('music')).toEqual(true);
        });
    });

    describe("透過輸入改變狀態物件", function() {

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

        it('在按下兩次 switch 開關時，狀態物件的 music 值應該會改變兩次', function () {
            setTimeout(function () {
                expect(status_model.get('music')).toEqual(false);

                switch_dom.trigger('click');
                expect(status_model.get('music')).toEqual(true);

                switch_dom.trigger('click');
                expect(status_model.get('music')).toEqual(false);
            }, 0);
        });
    });

    describe("透過狀態物件改變輸出", function () {
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

        it('當狀態物件的 music 改變值時， display 的文字應該要顯示對應的 on 或 off', function () {
            status_model.set('music', false);
            console.log(display_dom.text());
            expect(display_dom.text()).toEqual('off');

            status_model.set('music', true);
            console.log(display_dom.text());
            expect(display_dom.text()).toEqual('on');
        });
    });

    describe("透過輸入改變輸出", function () {

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

        it('在按下兩次 switch 開關時， display 的文字應該要顯示對應的 on 或 off', function () {
            setTimeout(function () {
                switch_dom.trigger('click');
                expect(display_dom.text()).toEqual('off');

                switch_dom.trigger('click');
                expect(display_dom.text()).toEqual('on');
            }, 0);
        });
    });
});