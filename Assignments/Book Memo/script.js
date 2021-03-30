//Factory function to create new book object

const newBook = (bookName, authorName, date) => {

    bookName = bookName,
    authorName = authorName,
    date = date
    
    return { bookName, authorName, date };
};

//Local Storage

const getBooksFromLocal = () => {
    let books;
    if (localStorage.getItem("books") ===  null){
        books = [];
    }
    else{
        books = JSON.parse(localStorage.getItem("books"));
        
    }
    return books;
}

const addBookToLocal = (book) => {
    let books = getBooksFromLocal();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
}

const removeBookFromLocal = (bookName) => {
    const books = getBooksFromLocal();
    books.forEach((book, index) => {if(book.bookName === bookName){
        books.splice(index, 1);
    }})

    localStorage.setItem("books", JSON.stringify(books));
}

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
  //Add book to local storage
  addBookToLocal(book);
})

//Remove book from table
const deleteBook = del => {
  let bookName;  
  if (del.classList.contains("delete")) {
    //Obtain name of book
    bookName =  del.parentElement.parentElement.firstChild.innerHTML;
    del.parentElement.parentElement.remove();
  }
  //Remove book to local storage
  removeBookFromLocal(bookName);
}

//Event call to remove a book on clicking X
const bookForm = document.getElementById("book-readlist");
bookForm.addEventListener('click', (e) => {deleteBook(e.target)})

//Display books from local storage (if any)
const bookStore = getBooksFromLocal();
bookStore.forEach(book => addBook(book));

