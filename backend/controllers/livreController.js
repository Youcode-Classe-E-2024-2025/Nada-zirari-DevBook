const path = require('path');
const livre = require('../models/livre');

exports.getAll = (req, res) => {
    livre.getAll((err, livres) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(livres);
    });
};

exports.create = (req, res) => {
    const { titre, description, auteur, category_id } = req.body;
    const livre = new livre(null, titre, description, auteur, category_id);

    livre.save((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("livre ajouté");
    });

    exports.getById = (req, res) => {
        const { id } = req.params;

        livre.findById(id, (err, rslt) => {
            if (err) {
                console.log(err);
                return res.status(500).send("erreur");
            }

            if (!rslt) return res.status(404).send('livre introuvable');
            res.json(rslt);
        });
    }

    exports.update = (req, res) => {
        const { id } = req.params;
        const { titre, description, auteur, category_id, read_status, dispo_status } = req.body;

        const livre = new livre(id, titre, description, auteur, category_id, read_status, dispo_status);

        livre.update((err, rslt) => {
            if (err) {
                console.error(err);
                return res.status(500).send("erreur");
            }
            res.send("livre updated");
        });
    };
};

exports.delete = (req, res) => {
    const { id } = req.params;

    livre.delete(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("supprimé");
    });
};

exports.filterByCategory = (req, res) => {
    const { categoryId } = req.params;

    livre.filterByCategory(categoryId, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};

exports.search = (req, res) => {
    const { q } = req.query;

    livre.search(q, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};
