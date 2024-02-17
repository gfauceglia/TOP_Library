class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  get info() {
    let text = this.title + " by " + this.author + ", " + this.pages + " pages, "
    if (this.read) {
      text += "read.";
    } else {
      text += "not read yet."
    }
    return text;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

const addBook = document.getElementById("addBook");
const bookForm = document.getElementById("bookDialog");

addBook.addEventListener('click', () => {
  bookForm.showModal();
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
      <div class="card-info">
        <span class="card-author">${book.author}</span>
        <span class="card-pages">Pages: ${book.pages}</span>
      </div>
      <div class="card-btns">
        <a onclick="removeBook(${index})">Remove from Library</a>
        <a onclick="changeReadStatus(${index})">${book.read ? 'Set to Unread' : 'Set to Read'}</a>
      <div>
    `
    card.innerHTML += '</div>'
    cardContainer.appendChild(card);
  })
}

function removeBook(id) {
  myLibrary.splice(id,id + 1);
  loadLibrary(myLibrary);
}

function changeReadStatus(id) {
  const book = myLibrary[id];
  book.toggleRead();
  loadLibrary(myLibrary);
}


const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
  new Book("1984", "George Orwell", 328, true)
];

loadLibrary(myLibrary);
