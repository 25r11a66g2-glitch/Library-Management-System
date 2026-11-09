// Load Books from MySQL

let allBooks = [];

async function loadBooks() {

    try {

        const response = await fetch("/books");

        allBooks = await response.json();

        displayBooks(allBooks);

    }

    catch (error) {

        document.getElementById("bookContainer").innerHTML =
            "<p>Unable to load books.</p>";

        console.log(error);

    }

}


// Display Books

function displayBooks(books) {

    const container = document.getElementById("bookContainer");

    container.innerHTML = "";

    if (books.length === 0) {

        container.innerHTML = "<p>No books found.</p>";

        return;

    }

    books.forEach(book => {

        const card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `

            <h3>${book.book_name}</h3>

            <p><b>Author:</b> ${book.author || "Unknown"}</p>

            <p><b>Category:</b> ${book.category_name}</p>

            <p><b>Status:</b> ${book.status}</p>

            <button onclick="showDetails(${book.book_id})">
                View Details
            </button>

        `;

        container.appendChild(card);

    });

}


// Search Books

function searchBooks() {

    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase();

    const filteredBooks = allBooks.filter(book =>

        book.book_name.toLowerCase().includes(searchValue) ||

        book.author.toLowerCase().includes(searchValue) ||

        book.category_name.toLowerCase().includes(searchValue)

    );

    displayBooks(filteredBooks);

}


// View Book Details

function showDetails(bookId) {

    window.location.href = "/book-details?id=" + bookId;

}


// Load books when page opens

document.addEventListener("DOMContentLoaded", loadBooks);