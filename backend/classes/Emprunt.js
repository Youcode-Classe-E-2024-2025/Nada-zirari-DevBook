class Emprunt {
    constructor(id, livreId, utilisateurId, dateEmprunt, dateRetour, dateEcheance) {
      this.id = id;
      this.livreId = livreId;
      this.utilisateurId = utilisateurId;
      this.dateEmprunt = dateEmprunt;
      this.dateRetour = dateRetour;
      this.dateEcheance = dateEcheance;
    }
  }
  module.exports = Emprunt;