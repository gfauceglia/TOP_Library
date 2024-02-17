const form = document.getElementById("newBookForm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const submitBtn = document.getElementById("submitBtn");

const titleField = {
  htmlField: title,
  customValidity: "The book title should have at least 2 characters.",
  constraintCheck: function() {
    const regex = "^.{2,}$";
    const constraint = new RegExp(regex, "");
    return constraint.test(this.htmlField.value);
  }
}

const authorField = {
  htmlField: author,
  customValidity: "The author name should be at least 2 characters long.",
  constraintCheck: function() {
    const regex = "^.{2,}$";
    const constraint = new RegExp(regex, "");
    return constraint.test(this.htmlField.value);
  }
}

const pagesField = {
  htmlField: pages,
  customValidity: "The number of pages should be a positive integer",
  constraintCheck: function() {
    const regex = "^[1-9]\d*$";
    const constraint = new RegExp(regex, "");
    return constraint.test(this.htmlField.value);
  }
}

function checkFieldValidity(field) {
  if (field.constraintCheck()) {
    field.htmlField.setCustomValidity("");
    return true
  } 
  field.htmlField.setCustomValidity(field.customValidity);
  return false
}

function checkFormValidity(fields) {
  for (const field of fields) {
    if (!checkFieldValidity(field)) {
      alert(field.customValidity);
      return false
    }
  }
  return true
}

function createNewBook(formData) {
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("readStatus");

  newBook = new Book(title, author, pages, read === "true");
  myLibrary.push(newBook);
  return true
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const fields = [titleField, authorField, pagesField];
  if (!checkFormValidity(fields)) {
    return false
  }
  
  createNewBook(new FormData(form));
  loadLibrary(myLibrary);
  bookForm.close();
});

title.oninput = () => checkFieldValidity(titleField)
author.oninput = () => checkFieldValidity(authorField)
pages.oninput = () => checkFieldValidity(pagesField)
