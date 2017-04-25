"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var Book = (function () {
    function Book(id, title, author, category, available) {
        if (available === void 0) { available = false; }
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.available = available;
    }
    return Book;
}());
function getAllBooks() {
    return [
        new Book(1, 'Authority', 'Jeff VanderMeer', enum_1.Category.SciFi, false),
        new Book(2, 'Finch', 'Jeff VanderMeer', enum_1.Category.SciFi, true)
    ];
}
function getFirstAvailable(books) {
    var book = books.find(function (book) { return book.available; });
    if (book)
        return book;
    return null;
}
function getByCategory(books, category) {
    return books.filter(function (book) { return book.category === category; });
}
function getById(books, id) {
    var book = books.find(function (book) { return book.id === id; });
    if (book)
        return book;
    return null;
}
function checkoutBooks(books, client) {
    var ids = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ids[_i - 2] = arguments[_i];
    }
    var checkouts = [];
    var book = null;
    var complete = false;
    ids.forEach(function (id) {
        book = getById(books, id);
        if (book)
            checkouts.push(book);
    });
    complete = ids.length === checkouts.length;
    return [complete, checkouts];
}
var books = getAllBooks();
var book = getFirstAvailable(books);
console.log(book);
//# sourceMappingURL=app.js.map