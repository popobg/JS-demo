class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class Library {
    constructor(... books) {
        // tableau de livres
        this.books = books;
    }

    displayBooks() {
        console.log('=========================');
        this.books.forEach(b => console.log(b));
        console.log('=========================');
        console.log();
    }

    addBook(book) {
        this.books.push(book);
    }

    // retourne un tableau
    findBookByTitle(title) {
        return this.books.filter(b => b.title.toLowerCase() === title.toLowerCase());
    }

    // retourne un livre
    findBookByTitleAndAuthor(title, author) {
        const index = this.books.findIndex((b) => b.title.toLowerCase() === title.toLowerCase() && b.author.toLowerCase() == author.toLowerCase());
        return this.books[index];
    }
}

(function () {
    const townLibrary = new Library(new Book('to Kill a Mockingbird', 'Harper Lee', 19.9), new Book('Pride and Prejudice', 'Jane Austen', 22), new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 16));

    townLibrary.displayBooks();

    townLibrary.addBook(new Book('1984', 'George Orwell', 14));
    townLibrary.addBook(new Book('1984', '?', 12));
    townLibrary.displayBooks();

    const wantedBooks = townLibrary.findBookByTitle('1984');
    const wantedBook = townLibrary.findBookByTitleAndAuthor('1984', 'George Orwell');

    console.log("Books named '1984' : ");
    console.log(wantedBooks);
    console.log("Book named '1984' by 'George Orwell' : ");
    console.log(wantedBook);
    console.log("Book named 'to Kill a Mockinbird' by 'Harper Lee' : ");
    console.log(townLibrary.findBookByTitleAndAuthor('to kill a mockingbird', 'harper lee'));
})();