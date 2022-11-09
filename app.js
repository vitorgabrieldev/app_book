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
        $("#list_books").append(`
        <li class="item_list">
            <p class="name_book">${info.book}</p>
            <section class="container_function">
                <p class="timer_container" data-id="${token_item_list}">${info.timer}</p>
                <svg onclick="controlls_item.config(${token_item_list})" class="svg_js" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                <svg onclick="controlls_item.delete(${token_item_list})" class="svg_js" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
            </section>
        </li>`);
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


const controlls_item = {
    delete: function(data) {
        let tag = document.getElementsByTagName('li')[data];
        let confirm_delete = window.confirm("Deseja excluir este livro");
        if(confirm_delete == true) {
            document.querySelector('.item_list').remove(tag);
        };
    },
    config: function(data) {
        let tag = document.getElementsByTagName('li')[data];
        console.log(tag);
    },
};