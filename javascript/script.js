

const Library =[];

function Books(title,author,pages,read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = displayRandomColor();
    return this;



}
Books.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(){
    Library.push(new Books(document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").checked));
    displayBooks();
}

function displayBooks(){

    const display =document.querySelector(".display");
    display.innerHTML = "";
    Library.forEach(book =>{
        display.innerHTML += `<div class="book" style="background-color:${book.color}">
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <p>${book.read ? "Read" : "Not Read"}</p>
        <button id="remove-btn" onclick="removeBook('${book.id}')">Remove</button>
        <button id="toggle-btn" onclick="toggleRead('${book.id}')">${book.read ? "Mark as Unread" : "Mark as Read"}</button>
        </div>`
    })
}

function removeBook(id){
    const index = Library.findIndex(book => book.id === id);
    if(index !== -1){
        Library.splice(index,1);
        displayBooks();
    }
}   
function toggleRead(id){
    const book = Library.find(book => book.id === id);
    if(book){
        book.toggleRead();
        displayBooks(); 
    }
}
function displayRandomColor(){
    const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    return randomColor;
}