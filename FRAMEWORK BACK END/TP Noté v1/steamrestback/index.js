import express from 'express';
import cors from 'cors';
import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync('./apidatabase.db');

const app = express()
const port = 8080


app.use(cors({
    origin: 'http://localhost:5173',
}))
app.use(express.json())

// Récuperer les jeux
app.get('/jeux', (req, res) => {
    try {
        const jeuxQuery = database.prepare('SELECT JeuID AS jeuId, Titre AS titre, Developpeur AS developpeur, Editeur AS editeur, DateSortie AS dateSortie, Image AS image, Prix AS prix FROM jeux');
        const jeux = jeuxQuery.all();

        res.json({
            success: true,
            count: jeux.length,
            data: jeux
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la récup des jeux',
            error: error.message
        });
    }
});

// Récuperer les jeux via leur ID
app.get('/jeux/:id', (req, res) => {
    const jeuQuery = database.prepare('SELECT JeuID AS jeuId, Titre AS titre, Developpeur AS developpeur, Editeur AS editeur, DateSortie AS dateSortie, Image AS image, Prix AS prix FROM jeux WHERE JeuID = ?');
    const jeu = jeuQuery.get(req.params.id);
    if (jeu) {
        res.json(jeu);
    } else {
        res.status(404).json({ error: 'Jeu non trouvé' });
    }
});

// Récuperer les utilisateurs
app.get('/utilisateurs', (req, res) => {
    const utilisateursQuery = database.prepare('SELECT UtilisateurID AS utilisateurId, NomUtilisateur AS nomUtilisateur, Email AS email, DateInscription AS dateInscription FROM utilisateurs');
    res.json(utilisateursQuery.all());
});
// Route de test pour voir les noms de colonnes
app.get('/test-columns', (req, res) => {
    const test1 = database.prepare('SELECT UtilisateurID AS utilisateurId, NomUtilisateur AS nomUtilisateur, Email AS email, DateInscription AS dateInscription FROM utilisateurs LIMIT 1').get();
    const test2 = database.prepare('SELECT JeuID AS jeuId, Titre AS titre, Developpeur AS developpeur, Editeur AS editeur, DateSortie AS dateSortie, Image AS image, Prix AS prix FROM jeux LIMIT 1').get();
    const test3 = database.prepare('SELECT UtilisateurID AS utilisateurId, JeuID AS jeuId, HeuresJeu AS heuresJeu, EstInstalle AS estInstalle FROM BibliothequeJeux LIMIT 1').get();

    res.json({
        utilisateur: test1,
        jeu: test2,
        biblio: test3
    });
});

// Récuperer les utilisateurs via leur ID
app.get('/utilisateurs/:id', (req, res) => {
    try {
        const utilisateurQuery = database.prepare('SELECT UtilisateurID AS utilisateurId, NomUtilisateur AS nomUtilisateur, Email AS email, DateInscription AS dateInscription FROM utilisateurs WHERE UtilisateurID = ?');
        const utilisateur = utilisateurQuery.get(req.params.id);

        if (utilisateur) {
            res.json({
                success: true,
                data: utilisateur
            });
        } else {
            res.status(404).json({
                success: false,
                message: `Utilisateur avec l'ID ${req.params.id} non trouvé`
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la récupération de l\'utilisateur',
            error: error.message
        })
    }
});

// GET /utilisateurs/:idUser/bibliothequejeux – Récupérer la liste des jeux
app.get('/utilisateurs/:idUser/bibliothequejeux', (req, res) => {
    const idUser = req.params.idUser;

    try {
        const sqlQuery = `
            SELECT
                jeux.JeuID AS jeuId,
                jeux.Titre AS titre,
                jeux.Developpeur AS developpeur,
                jeux.Editeur AS editeur,
                jeux.DateSortie AS dateSortie,
                jeux.Image AS image,
                jeux.Prix AS prix,
                BibliothequeJeux.HeuresJeu AS heuresJeu,
                BibliothequeJeux.EstInstalle AS estInstalle
            FROM
                BibliothequeJeux
            JOIN
                jeux ON BibliothequeJeux.JeuID = jeux.JeuID
            WHERE
                BibliothequeJeux.UtilisateurID = ?
        `;

        const bibliothequeQuery = database.prepare(sqlQuery);
        const jeuxBibliotheque = bibliothequeQuery.all(idUser);

        res.json({
            success: true,
            count: jeuxBibliotheque.length,
            data: jeuxBibliotheque
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Erreur lors de la récup de la bibliothèque pour l'utilisateur ID: ${idUser}`,
            error: error.message
        });
    }
});

// DELETE /utilisateurs/:idUser/bibliothequejeux/:jeuId – Supprimer un jeu de la bibliothèque
app.delete('/utilisateurs/:idUser/bibliothequejeux/:jeuId', (req, res) => {
    const idUser = req.params.idUser;
    const jeuId = req.params.jeuId;

    try {
        const sqlQuery = `
            DELETE FROM
                BibliothequeJeux
            WHERE
                UtilisateurID = ? AND JeuID = ?
        `;

        const deleteStatement = database.prepare(sqlQuery);
        const result = deleteStatement.run(idUser, jeuId);

        if (result.changes > 0) {
            res.json({
                success: true,
                message: `Le jeu ID ${jeuId} a été supprimé de la bibliothèque de l'utilisateur ID ${idUser}.`,
            });
        } else {
            res.status(404).json({
                success: false,
                message: `Le jeu ID ${jeuId} n'a pas été trouvé dans la bibliothèque de l'utilisateur ID ${idUser}.`
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Erreur lors de la suppression du jeu de la bibliothèque.`,
            error: error.message
        });
    }
});

// PUT /utilisateurs/:idUser/bibliothequejeux/:jeuId – Modifier le statut d'installation
app.put('/utilisateurs/:idUser/bibliothequejeux/:jeuId', (req, res) => {
    const idUser = req.params.idUser;
    const jeuId = req.params.jeuId;

    const { estInstalle } = req.body;

    if (estInstalle === undefined) {
        return res.status(400).json({
            success: false,
            message: "La nouvelle valeur d'installation ('estInstalle') est manquante dans le corps de la requête."
        });
    }

    try {
        const sqlQuery = `
            UPDATE
                BibliothequeJeux
            SET
                EstInstalle = ?
            WHERE
                UtilisateurID = ? AND JeuID = ?
        `;

        const updateStatement = database.prepare(sqlQuery);
        const result = updateStatement.run(estInstalle, idUser, jeuId);

        if (result.changes > 0) {
            res.json({
                success: true,
                message: `Le statut d'installation du jeu ID ${jeuId} pour l'utilisateur ID ${idUser} a été mis à jour avec succès à : ${estInstalle}.`,
                newStatus: estInstalle
            });
        } else {
            res.status(404).json({
                success: false,
                message: `Jeu ID ${jeuId} non trouvé dans la bibliothèque de l'utilisateur ID ${idUser}. Aucune mise à jour effectuée.`
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Erreur lors de la mise à jour du statut d'installation.`,
            error: error.message
        });
    }
});

// POST /achats – Enregistre l'achat d'un jeu
app.post('/achats', (req, res) => {
    const { JeuID, UtilisateurID } = req.body;

    if (!JeuID || !UtilisateurID) {
        return res.status(400).json({
            success: false,
            message: "Les champs 'JeuID' et 'UtilisateurID' sont requis dans le corps de la requête."
        });
    }

    try {
        database.exec('BEGIN TRANSACTION');

        const dateAchat = new Date().toISOString();
        const achatQuery = database.prepare(
            'INSERT INTO Achats (UtilisateurID, JeuID, DateAchat) VALUES (?, ?, ?)'
        );
        const achatResult = achatQuery.run(UtilisateurID, JeuID, dateAchat);
        const nouvelAchatID = achatResult.lastInsertRowid;

        const estInstalle = 0;
        const checkQuery = database.prepare(
            'SELECT 1 FROM BibliothequeJeux WHERE UtilisateurID = ? AND JeuID = ?'
        );
        const existingEntry = checkQuery.get(UtilisateurID, JeuID);

        if (existingEntry) {
            database.exec('ROLLBACK');
            return res.status(409).json({
                success: false,
                message: "Le jeu est déjà présent dans la bibliothèque de cet utilisateur. Achat annulé."
            });
        }

        const bibliothequeQuery = database.prepare(
            'INSERT INTO BibliothequeJeux (UtilisateurID, JeuID, EstInstalle) VALUES (?, ?, ?)'
        );
        bibliothequeQuery.run(UtilisateurID, JeuID, estInstalle);
        database.exec('COMMIT');

        res.status(201).json({
            success: true,
            message: `Achat et ajout à la bibliothèque réussis pour l'utilisateur ID ${UtilisateurID}.`,
            data: {
                AchatID: nouvelAchatID,
                JeuID: JeuID,
                UtilisateurID: UtilisateurID
            }
        });

    } catch (error) {
        database.exec('ROLLBACK');

        res.status(500).json({
            success: false,
            message: 'Erreur critique lors de l\'opération d\'achat/ajout à la bibliothèque. La transaction a été annulée.',
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`L'API Steam écoute sur le port ${port}`)
});