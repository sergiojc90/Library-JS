// First, we are going to create a constructor for making "Book" objects.
// The "Book" object is going to have the following attributes:
// Title, author, number of pages and whether or not you have read the book.

    let myLibrary = [
        {
            "title":"The Hobbit",
            "author":"J.R.R Tolkien",
            "pages":"295",
            "status":"Already read"
        },
        {
            "title":"The Hobbit",
            "author":"J.R.R Tolkien",
            "pages":"295",
            "status":"Already read"
        },
        {
            "title":"The Hobbit",
            "author":"J.R.R Tolkien",
            "pages":"295",
            "status":"Already read"
        },
        {
            "title":"The Hobbit",
            "author":"J.R.R Tolkien",
            "pages":"295",
            "status":"Already read"
        },
        {
            "title":"The Hobbit",
            "author":"J.R.R Tolkien",
            "pages":"295",
            "status":"Already read"
        }
    ];

    function Book(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.info = function() {
            return (title + " by " + author + ", " + pages + " pages, " + status);
        }
    }

    function addBookToLibrary(){

    }
    
    const theHobbit = new Book("The Hobbit", "J.R.R Tolkien","295","not read yet");