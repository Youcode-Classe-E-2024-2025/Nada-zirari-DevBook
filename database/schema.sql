-- Active: 1733826049669@@127.0.0.1@3306
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


INSERT INTO livres(titre, auteur, statut, categorie_id) VALUES
('Clean Code', 'Robert C. Martin', 'lu', 1),
('The Pragmatic Programmer', 'Andy Hunt', 'à_lire', 1),
('Domain-Driven Design', 'Eric Evans', 'en_cours', 2);

INSERT INTO utilisateurs(nom, email) VALUES
('nada', 'nada@gmail.com'),
('nada2', 'nada2@gmail.com');

INSERT INTO emprunts(livre_id, utilisateur_id, date_emprunt, date_echeance)
VALUES (1, 1, '2024-03-01', '2024-03-15'),
       (2, 2, '2024-04-01', '2024-04-15');