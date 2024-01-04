class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  get info() {
    let text = title + " by " + author + ", " + pages + " pages, "
    if (read) {
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
