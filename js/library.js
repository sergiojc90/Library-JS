// First, we are going to create a constructor for making "Book" objects.
// The "Book" object is going to have the following attributes:
// Title, author, number of pages and whether or not you have read the book.

    let myLibrary = [
        {
            title:"The Hobbit",
            author:"J.R.R Tolkien",
            pages:"295",
            status:"Already read"
        },
        {
            title:"Meditations",
            author:"Marcus Aurelius",
            pages:"172",
            status:"Already read"
        },
        {
            title:"Plato's Dialogs",
            author:"Plato",
            pages:"511",
            status:"Not read yet"
        },
        {
            title:"The Republic",
            author:"Plato",
            pages:"211",
            status:"Not read yet"
        },
        {
            title:"Object-Oriented JavaScript",
            author:"Nicholas Zakas",
            pages:"120",
            status:"Not read yet"
        }
    ];

    class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.info = function () {
            return (title + " by " + author + ", " + pages + " pages, " + status);
        };
    }
}

    function addBookToLibrary(){

    }
    
    const theHobbit = new Book("The Hobbit", "J.R.R Tolkien","295","not read yet");

    myLibrary.forEach(function(item) {
        let div = document.createElement("div");
        let title = document.createElement("h2");
        let author = document.createElement("h3");
        let pages = document.createElement("p");
        let status = document.createElement("p");
        let button = document.createElement("button");

        div.classList.add("card")
        button.classList.add("btn","card__btn")

        title.textContent = item.title;
        author.textContent = item.author;
        pages.textContent = "Pages: "+item.pages;
        status.textContent = item.status;
        button.textContent = "Remove";

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);
        div.appendChild(button);

        document.getElementById("grid").appendChild(div);
    });

    // Event listeners

    document.addEventListener("DOMContentLoaded",() => {
        const addBookForm = document.querySelector("#addBook");
        const background = document.querySelector("body").appendChild(document.createElement("div"));

        document.querySelector("#btn-addForm").addEventListener("click", () => {
            background.classList.add("transparent")
            addBookForm.classList.remove("form--hidden");

        })

        document.querySelector("#btn-addBook").addEventListener("click", () => {
            background.classList.remove("transparent")
            addBookForm.classList.add("form--hidden");
        })
    });