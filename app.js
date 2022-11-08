// **** Call Event  ****
document.querySelector('#form_container').addEventListener('submit', (e) => {
    e.preventDefault();
    addBook.verification();
});

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        addBook.verification();
    };
});

// --- * --- Call Hidden timer item list --- * ---


// *** array Books Locate ***
var array_books = [];
var token_item_list = 0;


const addBook = {
    verification: function() {
        var book = document.querySelector('#book').value;
        // --- * --- Validation books --- * --- 
        if(book) {
            this.addBook(book);
        };
    },
    addBook: function(book) {
        // --- * --- Add element array --- * --- 
        array_books.push(book);
        document.querySelector('#book').value = "";
        
        // --- * --- Get Hours --- * ---
        let info = {
            book: book,
            timer: this.getHours(),
        };
        this.createList(info);   
    },

    createList: function(info) {
        // --- * --- Create list tags --- * --- 
        $("#list_books").append(`<li class="item_list"><p>${info.book}</p><p class="show_btn" onclick="hiddenShow(${token_item_list})" data-id="${token_item_list}">Adicionado: ${info.timer}</p></li>`);
        // --- * --- Add -> 1 <- token_item_list --- * --- 
        token_item_list++;
    },

    getHours: function() {
        // --- * --- Get Hours --- * --- 
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let day_element = new Date().getDate();
        let mounth = new Date().getMonth();

        day = (day_element < 10 ? '0' + day_element : day_element);
        let timer = `${day}/${mounth} - ${hours}:${minutes}`;

        // --- * --- Return Function = Date/Timer --- * --- 
        return timer;
    },
};


function hiddenShow(atrib) {
    let element_tep = document.querySelector('.show_btn');
    console.log(atrib);
};