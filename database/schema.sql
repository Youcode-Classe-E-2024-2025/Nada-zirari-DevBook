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

CREATE TABLE utilisateurs (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE emprunts (
  id SERIAL PRIMARY KEY,
  livre_id INTEGER REFERENCES livres(id) ON DELETE CASCADE,
  utilisateur_id INTEGER REFERENCES utilisateurs(id) ON DELETE CASCADE,
  date_emprunt DATE NOT NULL,
  date_retour DATE,
  date_echeance DATE
);


INSERT INTO categories(nom) VALUES ('Programmation'), ('Architecture'), ('Design');