define([
    'models/Status',
    'views/Switch',
    'views/Display'
], function (Status, Switch, Display) {

    jasmine.getFixtures().fixturesPath = './';

    describe("只有狀態物件", function() {

        var status_model;

        beforeEach(function () {
            status_model = new Status();
        });

        afterEach(function () {
            status_model = null;
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
            loadFixtures('index.html');
            status_model = new Status();
            switch_view = new Switch({
                model: status_model,
                el: '.input'
            });
            switch_dom = $('#switch');
        });

        afterEach(function () {
            status_model = null;
            switch_view = null;
            switch_dom = null;
        });

        it('在按下兩次 switch 開關時，狀態物件的 music 值應該會改變兩次', function () {
            expect(switch_view.model.get('music')).toBeFalsy();
            switch_dom.click();
            expect(status_model.get('music')).toBeTruthy();
            switch_dom.click();
            expect(status_model.get('music')).toBeFalsy();
        });
    });

    describe("透過狀態物件改變輸出", function () {
        var status_model;
        var display_view;
        var display_dom;

        beforeEach(function () {
            loadFixtures('index.html');
            status_model = new Status();
            display_view = new Display({
                model: status_model,
                el: '.output'
            });
            display_dom = $('#status');
        });

        afterEach(function () {
            status_model = null;
            display_view = null;
            display_dom = null;
        });

        it('當狀態物件的 music 改變值時， display 的文字應該要顯示對應的 on 或 off', function () {
            status_model.set('music', false);
            expect(display_dom.text()).toEqual('off');

            status_model.set('music', true);
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
            loadFixtures('index.html');
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

        afterEach(function () {
            status_model = null;
            switch_view = null;
            switch_dom = null;
            display_view = null;
            display_dom = null;
        });

        it('在按下兩次 switch 開關時， display 的文字應該要顯示對應的 on 或 off', function () {
            switch_dom.click();
            expect(switch_dom.prop('checked')).toEqual(true);
            expect(display_dom.text()).toEqual('on');

            switch_dom.click();
            expect(switch_dom.prop('checked')).toEqual(false);
            expect(display_dom.text()).toEqual('off');
        });
    });
});