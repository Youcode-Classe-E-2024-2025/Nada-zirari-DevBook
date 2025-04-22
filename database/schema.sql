CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL
);

CREATE TABLE livres (
  id SERIAL PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  auteur VARCHAR(100),
  statut VARCHAR(50), -- 'lu', 'en_cours', 'à_lire'
  categorie_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
);