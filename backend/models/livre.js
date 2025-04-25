class Livre {
    constructor(id, titre, auteur, statut, categorieId) {
      this.id = id;
      this.titre = titre;
      this.auteur = auteur;
      this.statut = statut; // 'lu', 'en_cours', 'à_lire'
      this.categorieId = categorieId;
    }
  }
  static getAll(callback) {
    const sql = "SELECT * FROM livres";
    db.query(sql, (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt);
    });
}

save(callback) {
    const sql = `INSERT INTO livres (titre, description, auteur, category_id, read_status, dispo_status) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [this.titre, this.description, this.auteur, this.category_id, this.read_status, this.dispo_status];

    db.query(sql, values, (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt);
    })
}

static findById(id, callback) {
    const sql = "SELECT * FROM livres WHERE id = ?";

    db.query(sql, [id], (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt[0]);
    });
}

update(callback) {
    const sql = `UPDATE livres SET titre = ?, description = ?, auteur = ?, category_id = ?, read_status = ?, dispo_status = ? WHERE id = ?`;
    const values = [this.titre, this.description, this.auteur, this.category_id, this.read_status, this.dispo_status, this.id];

    db.query(sql, values, (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt);
    });
}

static delete(id, callback) {
    const sql = "DELETE FROM livres WHERE id = ?";

    db.query(sql, [id], (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt);
    });
}

static filterByCategory(categoryId, callback) {
    const sql = "SELECT * FROM livres WHERE category_id = ?";

    db.query(sql, [categoryId], (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt);
    });
}

static search(keyword, callback) {
    const sql = "SELECT * FROM livres WHERE titre LIKE ? OR description LIKE ?";

    db.query(sql, [`%${keyword}%`, `%${keyword}%`], (err, rslt) => {
        if (err) return callback(err, null);
        callback(null, rslt);
    });
}

  module.exports = Livre;