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

function loadLibrary(arr) {
  const cardContainer = document.querySelector('section.container');
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