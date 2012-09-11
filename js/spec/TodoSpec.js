define([
    'collections/TodoList',
    'models/Todo'
], function (TodoList, Todo) {
    describe("Todo", function() {
        
        var todo_list;
        var todo;

        beforeEach(function () {
            todo_list = new TodoList();
            // todo = new Todo();
        });

        it('should create a Todo', function () {
            var todo = todo_list.create();
            expect(todo instanceof Todo).toEqual(true);
        });
    });    
});