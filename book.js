const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
  new Book("1984", "George Orwell", 328, true)
];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let text = title + " by " + author + ", " + pages + " pages, "
    if (read) {
      text += "read.";
    } else {
      text += "not read yet."
    }
    console.log(text)
  }
}

function addBookToLibrary() {
  
}

const addBook = document.getElementById("addBook");
const bookForm = document.getElementById("bookDialog");
const submitBtn = document.getElementById("submitBtn");

addBook.addEventListener('click', () => {
  bookForm.showModal();
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value.trim();
  const author = document.querySelector('input[name="author"]').value.trim();
  const pages = parseInt(document.querySelector('input[name="pages"]').value);
  const select = document.querySelector('select');
  const read = select.options[select.selectedIndex].value;

  if (title !== "" && author !== "" && !isNaN(pages) && pages > 0 && read !== "default") {
    const newBook = new Book(title, author, pages, read === "true");
    myLibrary.push(newBook); 
    loadLibrary(myLibrary);
    bookForm.close();

  } else {
    alert("Error: Please check the inputs and try again");
  }
});

function loadLibrary(arr) {
  const cardContainer = document.querySelector('.container');
  cardContainer.innerHTML = '';
  arr.forEach((book, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', index);
    card.innerHTML = `
      <h1 class="card-title">${book.title}</h1>
      <p class="card-author">${book.author}</p>
      <p class="card-pages">Pages: ${book.pages}</p>
    `
    cardContainer.appendChild(card);
  })
}

loadLibrary(myLibrary);