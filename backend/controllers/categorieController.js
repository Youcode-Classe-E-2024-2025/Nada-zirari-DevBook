const path = require('path');
const Categorie = require('../models/Categorie');

exports.getAll = (req, res) => {
    Categorie.getAll((err, categories) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreu   r");
        }
        res.json(categories);
    });
};

exports.create = (req, res) => {
    const { nom } = req.body;
    const nouvelleCategorie = new Categorie(null, nom);

    nouvelleCategorie.save((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("catégorie ajoutée");
    });
};

exports.getById = (req, res) => {
    const { id } = req.params;

    Categorie.findById(id, (err, rslt) => {
        if (err) {
            console.log(err);
            return res.status(500).send("erreur");
        }

        if (!rslt) return res.status(404).send('catégorie introuvable');
        res.json(rslt);
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { nom } = req.body;

    const categorieToUpdate = new Categorie(id, nom);

    categorieToUpdate.update((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("catégorie mise à jour");
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    Categorie.delete(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("catégorie supprimée");
    });
};

exports.getLivresByCategory = (req, res) => {
    const { id } = req.params;

    Categorie.getLivres(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};
