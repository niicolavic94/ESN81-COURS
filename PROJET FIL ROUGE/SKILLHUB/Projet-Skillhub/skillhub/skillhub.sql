-- 1. Initialisation
CREATE DATABASE IF NOT EXISTS skillhub3;
USE skillhub3;

-- 2. Tables de base (sans clés étrangères sortantes)
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE salles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL UNIQUE,
    capacite INT NOT NULL CHECK (capacite > 0)
);

CREATE TABLE annees_academiques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    annee VARCHAR(20) NOT NULL UNIQUE,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    actuelle BOOLEAN DEFAULT false,
    CONSTRAINT dates_coherentes CHECK (date_fin > date_debut)
);

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('ADMIN', 'FORMATEUR', 'APPRENANT')),
    code_acces VARCHAR(50),
    actif BOOLEAN DEFAULT true,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    derniere_connexion TIMESTAMP NULL,
    CONSTRAINT code_acces_apprenant CHECK (
        (role = 'APPRENANT' AND code_acces IS NOT NULL) OR
        (role != 'APPRENANT' AND code_acces IS NULL)
    )
);

-- 3. Tables avec dépendances
CREATE TABLE apprenant_annees (
    apprenant_id INT NOT NULL,
    annee_academique_id INT NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (apprenant_id, annee_academique_id),
    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (annee_academique_id) REFERENCES annees_academiques(id) ON DELETE CASCADE
);

CREATE TABLE formations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(200) NOT NULL,
    description TEXT,
    statut VARCHAR(50) DEFAULT 'proposee' CHECK (statut IN ('proposee', 'validee', 'refusee')),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_validation TIMESTAMP NULL,
    date_modification TIMESTAMP NULL,
    annee_academique_id INT,
    formateur_id INT NOT NULL,
    validateur_id INT NULL,
    motif_refus TEXT,
    FOREIGN KEY (annee_academique_id) REFERENCES annees_academiques(id) ON DELETE SET NULL,
    FOREIGN KEY (formateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (validateur_id) REFERENCES utilisateurs(id)
);

CREATE TABLE formation_categories (
    formation_id INT NOT NULL,
    categorie_id INT NOT NULL,
    PRIMARY KEY (formation_id, categorie_id),
    FOREIGN KEY (formation_id) REFERENCES formations(id) ON DELETE CASCADE,
    FOREIGN KEY (categorie_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE ateliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL,
    capacite INT NOT NULL CHECK (capacite > 0),
    statut VARCHAR(50) DEFAULT 'planifie',
    formation_id INT NOT NULL,
    salle_id INT NULL,
    FOREIGN KEY (formation_id) REFERENCES formations(id) ON DELETE CASCADE,
    FOREIGN KEY (salle_id) REFERENCES salles(id) ON DELETE SET NULL,
    CONSTRAINT horaires_valides CHECK (heure_fin > heure_debut)
);

CREATE TABLE inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    statut VARCHAR(50) DEFAULT 'inscrit' CHECK (statut IN ('inscrit', 'annule')),
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    apprenant_id INT NOT NULL,
    atelier_id INT NOT NULL,
    present BOOLEAN NULL DEFAULT NULL,
    commentaire_presence TEXT,
    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (atelier_id) REFERENCES ateliers(id),
    UNIQUE(apprenant_id, atelier_id)
);

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note INT CHECK (note BETWEEN 0 AND 20),
    commentaire TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP NULL,
    apprenant_id INT NOT NULL,
    atelier_id INT NOT NULL,
    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (atelier_id) REFERENCES ateliers(id),
    UNIQUE(apprenant_id, atelier_id)
);

-- 4. Index
CREATE INDEX idx_utilisateurs_role ON utilisateurs(role);
CREATE INDEX idx_formations_statut ON formations(statut);
CREATE INDEX idx_ateliers_date ON ateliers(date);

-- 5. Triggers de validation métier
DELIMITER //

-- Vérification Rôle Apprenant pour l'inscription annuelle
CREATE TRIGGER trg_valide_role_apprenant
BEFORE INSERT ON apprenant_annees
FOR EACH ROW
BEGIN
    IF (SELECT role FROM utilisateurs WHERE id = NEW.apprenant_id) != 'APPRENANT' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Seuls les utilisateurs avec le rôle APPRENANT peuvent être rattachés à une année.';
    END IF;
END//

-- Vérification Rôle Formateur pour la création de formation
CREATE TRIGGER trg_valide_role_formateur
BEFORE INSERT ON formations
FOR EACH ROW
BEGIN
    IF (SELECT role FROM utilisateurs WHERE id = NEW.formateur_id) != 'FORMATEUR' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Seul un utilisateur avec le rôle FORMATEUR peut créer une formation.';
    END IF;
END//

-- Vérification Inscription préalable pour évaluation
CREATE TRIGGER trg_valide_evaluation_inscription
BEFORE INSERT ON evaluations
FOR EACH ROW
BEGIN
    IF NOT EXISTS (SELECT 1 FROM inscriptions WHERE apprenant_id = NEW.apprenant_id AND atelier_id = NEW.atelier_id AND statut = 'inscrit') THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Un apprenant doit être inscrit à l atelier pour l évaluer.';
    END IF;
END//

-- Gestion des conflits d'horaires Apprenant [cite: 74, 76]
CREATE TRIGGER trg_check_inscription_conflit
BEFORE INSERT ON inscriptions
FOR EACH ROW
BEGIN
    DECLARE v_date DATE;
    DECLARE v_debut, v_fin TIME;
    SELECT date, heure_debut, heure_fin INTO v_date, v_debut, v_fin FROM ateliers WHERE id = NEW.atelier_id;
    
    IF EXISTS (
        SELECT 1 FROM inscriptions i 
        JOIN ateliers a ON i.atelier_id = a.id
        WHERE i.apprenant_id = NEW.apprenant_id 
        AND i.statut = 'inscrit'
        AND a.date = v_date
        AND ((v_debut < a.heure_fin) AND (v_fin > a.heure_debut))
    ) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Conflit d horaire : l apprenant a déjà un atelier sur ce créneau.';
    END IF;
END//

-- Empêcher suppression utilisateur avec données 
CREATE TRIGGER trg_prevent_user_delete
BEFORE DELETE ON utilisateurs
FOR EACH ROW
BEGIN
    IF EXISTS (SELECT 1 FROM inscriptions WHERE apprenant_id = OLD.id) OR 
       EXISTS (SELECT 1 FROM formations WHERE formateur_id = OLD.id) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Suppression impossible : l utilisateur possède des données liées.';
    END IF;
END//

-- Remise en validation si modification majeure [cite: 41]
CREATE TRIGGER trg_reset_formation_statut
BEFORE UPDATE ON formations
FOR EACH ROW
BEGIN
    IF OLD.statut = 'validee' AND (NEW.titre != OLD.titre OR NEW.description != OLD.description) THEN
        SET NEW.statut = 'proposee';
        SET NEW.date_validation = NULL;
    END IF;
END//

-- Gestion des conflits de salles [cite: 69]
CREATE TRIGGER trg_check_salle_overlap
BEFORE INSERT ON ateliers
FOR EACH ROW
BEGIN
    IF NEW.salle_id IS NOT NULL AND EXISTS (
        SELECT 1 FROM ateliers 
        WHERE salle_id = NEW.salle_id AND date = NEW.date
        AND ((NEW.heure_debut < heure_fin) AND (NEW.heure_fin > heure_debut))
    ) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La salle est déjà occupée sur ce créneau.';
    END IF;
END//

DELIMITER ;