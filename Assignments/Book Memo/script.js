//Factory function to create new book object

const newBook = (bookName, authorName, date) => {

    bookName = bookName,
    authorName = authorName,
    date = date
    
    return { bookName, authorName, date };
};

//Add book to table

const addBook = (book) => {
    
    const bookList = document.getElementById("book-readlist");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.bookName}</td>
    <td>${book.authorName}</td>
    <td>${book.date}</td>
    <td><a href="#" class="delete-btn delete">X</a></td>`;

    bookList.appendChild(row);
    document.getElementById("bookform").reset();
};

//Event call to add book to table on submit
document.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById("bookname").value;
    const author = document.getElementById("bookauthor").value;
    const date = document.getElementById("bookdate").value;
    
    const book = newBook(name, author, date);
    
    addBook(book);
})

//Remove book from table
const deleteBook = del => {
    if (del.classList.contains('delete')){
        del.parentElement.parentElement.remove();
    }
}

//Event call to remove a book on clicking X
const bookForm = document.getElementById("book-readlist");
bookForm.addEventListener('click', (e) => {deleteBook(e.target)})

