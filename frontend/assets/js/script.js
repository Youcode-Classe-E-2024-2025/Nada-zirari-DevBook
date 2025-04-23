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


    filteredBooks.forEach(book => {
        const div = document.createElement('div');


        div.className = 'bg-white shadow-sm border border-gray-200 p-4 rounded-lg';
        div.innerHTML = `
          <p><span class="font-semibold">Titre:</span> ${book.titre}</p>
          <p><span class="font-semibold">Auteur:</span> ${book.auteur}</p>
          <p><span class="font-semibold">Catégorie:</span> ${book.categorie}</p>
          <p><span class="font-semibold">Statut:</span> ${book.statut}</p>
          <div class="mt-2 flex gap-2">
            <button onclick="supprimerLivre(${book.id})"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">🗑️ Supprimer</button>
            <button onclick="changerStatut(${book.id})"
              class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
              🔁 ${book.statut === 'disponible' ? 'Emprunter' : 'Rendre'}
            </button>
          </div>
        `;
        bookList.appendChild(div);
    });
  }

    function supprimerLivre(id) {
        books = books.filter(b => b.id !== id);
        renderBooks();
      }



      function changerStatut(id) {
        const livre = books.find(b => b.id === id);
        livre.statut = livre.statut === 'disponible' ? 'emprunté' : 'disponible';
        renderBooks();
      }