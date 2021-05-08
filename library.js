// First, we are going to create a constructor for making "Book" objects.
// The "Book" object is going to have the following attributes:
// Title, author, number of pages and whether or not you have read the book.

    function Book(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.info = function() {
            return (title + " by " + author + ", " + pages + " pages, " + status);
        }
    }

    const theHobbit = new Book("The Hobbit", "J.R.R Tolkien","295","not read yet");