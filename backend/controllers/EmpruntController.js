const path = require('path');
const Emprunt = require('../models/Emprunt');

exports.getAll = (req, res) => {
    Emprunt.getAll((err, emprunts) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(emprunts);
    });
};

exports.create = (req, res) => {
    const { livreId, utilisateurId, dateEmprunt, dateEcheance } = req.body;
    const nouvelEmprunt = new Emprunt(null, livreId, utilisateurId, dateEmprunt, null, dateEcheance);

    nouvelEmprunt.save((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("emprunt enregistré");
    });
};

exports.getById = (req, res) => {
    const { id } = req.params;

    Emprunt.findById(id, (err, rslt) => {
        if (err) {
            console.log(err);
            return res.status(500).send("erreur");
        }

        if (!rslt) return res.status(404).send('emprunt introuvable');
        res.json(rslt);
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { livreId, utilisateurId, dateEmprunt, dateRetour, dateEcheance } = req.body;

    const empruntToUpdate = new Emprunt(id, livreId, utilisateurId, dateEmprunt, dateRetour, dateEcheance);

    empruntToUpdate.update((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("emprunt mis à jour");
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    Emprunt.delete(id, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("emprunt supprimé");
    });
};

exports.returnBook = (req, res) => {
    const { id } = req.params;
    const dateRetour = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format

    Emprunt.returnBook(id, dateRetour, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.send("livre retourné");
    });
};

exports.getByUser = (req, res) => {
    const { utilisateurId } = req.params;

    Emprunt.getByUser(utilisateurId, (err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};

exports.getActiveLoans = (req, res) => {
    Emprunt.getActiveLoans((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};

exports.getOverdueLoans = (req, res) => {
    Emprunt.getOverdueLoans((err, rslt) => {
        if (err) {
            console.error(err);
            return res.status(500).send("erreur");
        }
        res.json(rslt);
    });
};
