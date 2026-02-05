-- Utilisation de la base
create database tp1;
USE tp1;

-- Création des tables
CREATE TABLE Service (
   id_service INT PRIMARY KEY AUTO_INCREMENT,
   libelle VARCHAR(50) NOT NULL
);

CREATE TABLE Fonction (
   id_fonction INT PRIMARY KEY AUTO_INCREMENT,
   libelle VARCHAR(50) NOT NULL,
   salaire DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Employe (
   id_employe INT PRIMARY KEY AUTO_INCREMENT,
   nom VARCHAR(50) NOT NULL,
   prenom VARCHAR(50),
   id_service INT NOT NULL,
   id_fonction INT NOT NULL,
   FOREIGN KEY (id_service) REFERENCES Service(id_service),
   FOREIGN KEY (id_fonction) REFERENCES Fonction(id_fonction)
);

-- Insertion des fonctions
INSERT INTO Fonction (libelle, salaire) VALUES
('Développeur', 3000),
('Chef de projet', 4500),
('Technicien', 2500),
('RH', 2800),
('Comptable', 3200);

-- Insertion des services
INSERT INTO Service (libelle) VALUES
('Informatique'),
('Ressources Humaines'),
('Maintenance'),
('Comptabilité');

-- Insertion des employés
INSERT INTO Employe (nom, prenom, id_service, id_fonction) VALUES
('Dupont', 'Alice', 1, 1),   -- Informatique, Développeur
('Martin', 'Bob', 1, 2),     -- Informatique, Chef de projet
('Durand', 'Chloe', 3, 3),   -- Maintenance, Technicien
('Petit', 'David', 2, 4),    -- Ressources Humaines, RH
('Bernard', 'Emma', 4, 5),   -- Comptabilité, Comptable
('Moreau', 'Lucas', 1, 1),   -- Informatique, Développeur
('Fournier', 'Sophie', 3, 3),-- Maintenance, Technicien
('Girard', 'Hugo', 2, 4);    -- Ressources Humaines, RH


1. Afficher par ordre alphabétique les services de l’entreprise.
SELECT * FROM Service ORDER BY libelle
2. Afficher par ordre alphabétique les fonctions de l’entreprise.
SELECT id_fonction, libelle FROM Fonction ORDER BY libelle 
3. Afficher pour chaque employé, sa fonction et son service.
SELECT employe.nom, employe.prenom, fonction.libelle FROM Employe
JOIN Fonction ON fonction.id_fonction = Employe.id_fonction
JOIN Service ON Service.id_service = Employe.id_service

4. Afficher le nom et prénom des personnes qui sont « Chef de Projet ».
SELECT nom,prenom FROM Employe 
JOIN  Fonction ON Fonction.id_fonction = Employe.id_fonction 
WHERE fonction.libelle = 'Chef de projet'

5. Afficher le libellé de la fonction qui a le salaire le plus petit.
SELECT fonction.libelle, fonction.salaire FROM Fonction 
WHERE salaire= (select MIN(salaire) FROM Fonction)

6. Afficher les employés qui ont la même fonction que Durant Chloé.
SELECT employe.nom, employe.prenom FROM Employe
WHERE Employe.id_fonction = ( 
SELECT id_fonction
    FROM Employe
    WHERE nom = 'Durand' AND prenom = 'Chloe')

7. Afficher le libellé des services qui n’ont aucun employé.
SELECT service.libelle From Service
LEFT JOIN Employe ON employe.id_service = service.id_service
WHERE employe.id_employe IS NULL


8. Afficher les libellés des services qui ont des fonctions d’analyste et des fonctions de
directeurs.

9. Afficher le service qui n’a aucun chef de projet.

10. Afficher par fonction, le nombre d’employés. Assurez-vous d’afficher toutes les fonctions.
11. Afficher pour chaque service, le nombre d’employés. Classez le résultat par ordre
décroissant du nombre d’employé.
12. Afficher le libelle du service qui a le plus grand nombre d’employés.
13. Afficher la liste des services qui ont plus d’employés que la moyenne.
14. Afficher, pour chaque service, l’employé qui a le salaire le plus élevé.
15. Afficher, pour chaque service, la fonction la plus représentée.
16. Afficher, pour chacune des fonctions, le service qui a le plus grand nombre d’employés dans
cette fonction.
17. Afficher le service dont la masse salariale est la plus grande.
BDD


