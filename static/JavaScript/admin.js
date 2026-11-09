// Initial Book Details

let books = [

    {
        name: "Python Programming",
        author: "John Smith",
        category: "Programming",
        status: "Available"
    },

    {
        name: "Java Programming",
        author: "James Gosling",
        category: "Programming",
        status: "Available"
    },

    {
        name: "Database Management",
        author: "Korth",
        category: "DBMS",
        status: "Borrowed"
    },

    {
        name: "Artificial Intelligence",
        author: "Stuart Russell",
        category: "Artificial Intelligence",
        status: "Available"
    }

];


// Display Books

function displayBooks() {

    let table = document.getElementById("bookTable");

    table.innerHTML = "";

    books.forEach(function(book, index) {

        let row = document.createElement("tr");

        let values = [
            book.name,
            book.author,
            book.category,
            book.status
        ];

        values.forEach(function(value) {

            let cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });

        let actionCell = document.createElement("td");

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {

            deleteBook(index);

        });

        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);

        table.appendChild(row);

    });

    updateStatistics();

}


// Add New Book

document.getElementById("bookForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("bookName").value;

    let author = document.getElementById("author").value;

    let category = document.getElementById("category").value;

    let status = document.getElementById("status").value;


    let newBook = {

        name: name,
        author: author,
        category: category,
        status: status

    };


    books.push(newBook);

    displayBooks();

    document.getElementById("bookForm").reset();

    alert("Book Added Successfully!");

});


// Delete Book

function deleteBook(index) {

    let confirmDelete = confirm("Do you want to delete this book?");

    if (confirmDelete) {

        books.splice(index, 1);

        displayBooks();

        alert("Book Deleted Successfully!");

    }

}


// Update Statistics

function updateStatistics() {

    document.getElementById("totalBooks").textContent = books.length;

    let available = books.filter(function(book) {

        return book.status === "Available";

    }).length;

    let borrowed = books.filter(function(book) {

        return book.status === "Borrowed";

    }).length;

    document.getElementById("availableBooks").textContent = available;

    document.getElementById("borrowedBooks").textContent = borrowed;

}


// Load Books

displayBooks();