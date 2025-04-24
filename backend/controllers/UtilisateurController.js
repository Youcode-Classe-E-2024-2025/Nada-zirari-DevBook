const path = require('path');
const Utilisateur = require('../models/utilisateur');

exports.getAll = (req, res) => {
    Utilisateur.getAll((err, utilisateurs) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(utilisateurs);
    });
};

exports.create = (req, res) => {
    const { nom, email } = req.body;
    const nouvelUtilisateur = new Utilisateur(null, nom, email);

    nouvelUtilisateur.save((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("utilisateur ajouté");
    });
};

exports.getById = (req, res) => {
    const { id } = req.params;

    Utilisateur.findById(id, (err, rslt) => {
        if (err) {
            console.log(err);
            return res.status(500).send("erreur");
        }

        if (!rslt) return res.status(404).send('utilisateur introuvable');
        res.json(rslt);
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { nom, email } = req.body;

    const utilisateurToUpdate = new Utilisateur(id, nom, email);

    utilisateurToUpdate.update((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("utilisateur mis à jour");
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    Utilisateur.delete(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("utilisateur supprimé");
    });
};

exports.getEmprunts = (req, res) => {
    const { id } = req.params;

    Utilisateur.getEmprunts(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};

exports.getActiveEmprunts = (req, res) => {
    const { id } = req.params;

    Utilisateur.getActiveEmprunts(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};

exports.getOverdueEmprunts = (req, res) => {
    const { id } = req.params;

    Utilisateur.getOverdueEmprunts(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};
