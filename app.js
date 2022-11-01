// **** Call Event  ****
document.querySelector('#form_container').addEventListener('submit', (e) => {
    e.preventDefault();
    addBook.verification();
});

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addBook.verification();
    }
});

// *** array Books Locate ***
var array_books = [];


const addBook = {
    verification: function() {
        var book = document.querySelector('#book').value;
        if(book) {
            this.addBook(book);
        }
    },
    addBook: function(book) {
        array_books.push(book);
        document.querySelector('#book').value = "";
        
        this.createList(book);
        
    },

    createList: function(book) {
        let element = document.createElement('li');
        let tag_father = document.querySelector('#list_books');
        var txt  = document.createTextNode(book);
        element.appendChild(txt);
        tag_father.appendChild(element);
    },
};