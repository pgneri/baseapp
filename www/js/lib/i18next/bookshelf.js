define(function(require) {
    var book = require('book');
    return {
        listBook: function() {
            alert(book.title);
        }
    };
});