class Livre {
    constructor(id, titre, auteur, statut, categorieId) {
      this.id = id;
      this.titre = titre;
      this.auteur = auteur;
      this.statut = statut; // 'lu', 'en_cours', 'à_lire'
      this.categorieId = categorieId;
    }
  }
  module.exports = Livre;