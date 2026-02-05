CREATE DATABASE tp1;
USE  tp1;

CREATE TABLE Service (
   Id_Service INT PRIMARY KEY AUTO_INCREMENT,
   libellé VARCHAR(50) NOT NULL
 
);

CREATE TABLE fonction (
   Id_fonction INT AUTO_INCREMENT,
   libellé VARCHAR(50),
   salaire DECIMAL(10, 2) NOT NULL,  -- DECIMAL avec 2 décimales pour les montants monétaires
   PRIMARY KEY(Id_fonction)
);

CREATE TABLE employes (
   Id_employes INT AUTO_INCREMENT,
   nom VARCHAR(50) NOT NULL,
   prénom VARCHAR(50),
   Id_Service INT NOT NULL,
   Id_fonction INT NOT NULL,
   PRIMARY KEY(Id_employes),
   FOREIGN KEY(Id_Service) REFERENCES Service(Id_Service),
   FOREIGN KEY(Id_fonction) REFERENCES fonction(Id_fonction)
);
