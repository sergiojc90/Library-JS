// First, we are going to create a constructor for making "Book" objects.
// The "Book" object is going to have the following attributes:
// Title, author, number of pages and whether or not you have read the book.


    // Books Array

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
            status:"Not read yet"
        },
        {
            title:"Plato's Dialogs",
            author:"Plato",
            pages:"511",
            status:"Already read"
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
            status:"Already read"
        }
    ];

    // Book constructor
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
    const addBookForm = document.querySelector("#addBook");
    const background = document.querySelector("body").appendChild(document.createElement("div"));
    const books = document.getElementsByClassName("read");
   
   
    // Event listeners

    document.addEventListener("DOMContentLoaded",() => {

        updateGrid();
        
        // Event that changes the read status of the book
        document.querySelectorAll(".read").forEach(item =>{
            item.addEventListener("click", () =>{
                if(item.classList.contains("card__read")){
                    item.classList.add("card__notRead");
                    item.classList.remove("card__read");
                    item.textContent = "Not read yet";
                    item.status = "Not read yet";
                }else{
                    item.classList.add("card__read");
                    item.classList.remove("card__notRead");
                    item.textContent = "Already read";
                    item.status = "Already read";
                };
            });
        });

        document.querySelectorAll(".card__btn").forEach(item =>{
            item.addEventListener("click", e =>{
                removeBookFromLibrary(e);
                updateGrid();
            });
        });
    });

    // Form
    const bringForm = document.getElementById("btn-addForm");
    bringForm.addEventListener("click", showForm);

    const form = document.getElementById("form-addBook");
    form.addEventListener("submit",addBook);

    function addBook(e){
        e.preventDefault();
        if(addBookToLibrary(getBookFromInput())){
            background.classList.remove("transparent");
            addBookForm.classList.add("form--hidden");
            updateGrid();
        }else{
            alert("Duplicated");
        };
    };

    function showForm(){
        form.reset();
        background.classList.add("transparent")
        addBookForm.classList.remove("form--hidden");
    };

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape"){
            background.classList.remove("transparent");
            addBookForm.classList.add("form--hidden");
        };
      });

    // Creating new book using form input values
    function getBookFromInput(){
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const status = document.querySelector("#read").value;

        return new Book(title,author,pages,status);
    };

    function removeBookFromLibrary(e){
        let bookIndex = e.target.parentNode.dataset.index;
        myLibrary.splice(bookIndex,1);
    };

    function addBookToLibrary(newBook){
        if (myLibrary.some((book) => book.title === newBook.title)) return false;

        myLibrary.push(newBook);
        saveLocal();
        return true;
    };

    //Books Grid

    function updateGrid(){

        let grid = document.getElementById("grid");
        while(grid.hasChildNodes()){
            grid.removeChild(grid.lastChild);
        };

        let index = 0;
        myLibrary.forEach(function(item) {
            let div = document.createElement("div");
            let title = document.createElement("h2");
            let author = document.createElement("h3");
            let pages = document.createElement("p");
            let status = document.createElement("button");
            let button = document.createElement("button");
            
            div.classList.add("card");
            div.dataset.index = `${index}`;
            index += 1;
            button.classList.add("btn","card__btn");
            
            if(item.status === "Already read"){
                status.classList.add("card__read","read");
            }else{
                status.classList.add("card__notRead","read");
            };
            
            
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
    }

    // Local Storage

    function saveLocal(){
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    }
