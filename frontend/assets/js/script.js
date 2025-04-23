const form = document.getElementById('addBookForm');
const bookList = document.getElementById('bookList');
const filter = document.getElementById('filtreCategorie'); 

let books = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const categorie = document.getElementById('categorie').value;
  
    const newBook = {
      id: Date.now(),
      titre,
      auteur,
      categorie,
      statut: 'disponible'
    };
  
    books.push(newBook);
    form.reset();
    renderBooks();
  });
  

  filter.addEventListener('change', renderBooks);



  function renderBooks() {
    const selectedCat = filter.value;
    bookList.innerHTML = '';
  
    const filteredBooks = selectedCat
      ? books.filter(b => b.categorie === selectedCat)
      : books;
  
    if (filteredBooks.length === 0) {
      bookList.innerHTML = '<p class="text-center text-gray-500">Aucun livre à afficher.</p>';
      return;
    }