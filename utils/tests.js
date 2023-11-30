QUnit.module('Домашна работа', function () {
    QUnit.test('Задача 1', function (assert) {
        assert.equal(task1(1, 2), 3);
    });

    QUnit.test('Задача 2', function (assert) {
        assert.equal(task2(1, 2), 3);
    });
});