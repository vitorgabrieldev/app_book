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
        
        // --- Get Hours ---
        // this.getHours();

        let info = {
            book: book,
            timer: this.getHours(),
        };

        this.createList(info);
        
    },

    createList: function(info) {
        let element = document.createElement('li');
        let tag_father = document.querySelector('#list_books');
        var txt  = document.createTextNode(`${info.book} - ${info.timer}`);
        element.appendChild(txt);
        tag_father.appendChild(element);
    },

    getHours: function() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let day_element = new Date().getDate();
        let mounth = new Date().getMonth();

        day = (day_element < 10 ? '0' + day_element : day_element);

        let timer = `${day}/${mounth} - ${hours}:${minutes}`;

        return timer;
    },
};