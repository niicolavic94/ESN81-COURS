#Q1
SELECT * FROM service s ORDER BY libserv;
#Q2
SELECT * FROM fonction f ORDER BY libfonct;
#Q3
SELECT * FROM employe AS e 
INNER JOIN service s ON e.idService = s.numserv
INNER JOIN fonction f ON e.idFonction = f.numfonc
#Q4
SELECT nom, prenom FROM	employe e 
INNER JOIN fonction f ON e.idFonction = f.numfonc 
WHERE f.libfonct = "Chef de projet"
#Q5
SELECT libfonct, salaire 
FROM fonction f
ORDER BY salaire 
Limit 1;
#Q6
SELECT libfonct FROM fonction f 
WHERE salaire = (SELECT min(salaire) FROM fonction f)

Q7
SELECT * FROM fonction f 
INNER JOIN employe e ON f.numfonc = e.idFonction 
WHERE nom != "Durand" AND prenom !="Chloe" AND e.idFonction  = (SELECT e2.idFonction FROM employe e2
						WHERE nom = "Durand" AND prenom ="Chloe")

#Q8																
SELECT * FROM service s
LEFT JOIN employe e ON s.numserv = e.idService
WHERE e.idService IS NULl

#Q9
SELECT s.libserv FROM service s 
INNER JOIN employe e ON s.numserv = e.idService 
INNER JOIN fonction f ON e.idFonction = f.numfonc
WHERE f.libfonct = "RH" AND s.numserv IN (
		SELECT s.numserv FROM service s 
		INNER JOIN employe e ON s.numserv = e.idService 
		INNER JOIN fonction f ON e.idFonction = f.numfonc
		WHERE f.libfonct = "Comptable")

#Q10	
SELECT DISTINCT libserv FROM service s 
INNER JOIN employe e ON s.numserv = e.idService 
INNER JOIN fonction f ON f.numfonc = e.idFonction 
WHERE s.numserv NOT IN (
		SELECT s.numserv FROM service s 
		INNER JOIN employe e ON s.numserv = e.idService
		INNER JOIN fonction f ON f.numfonc = e.idFonction 
		WHERE f.libfonct = "Chef de projet")
		
#	
SELECT DISTINCT libserv FROM service s 
INNER JOIN employe e ON s.numserv = e.idService 
INNER JOIN fonction f ON f.numfonc = e.idFonction AND e.idFonction != 2
#
SELECT f.libfonct, COUNT(*) FROM fonction f
LEFT JOIN employe e ON f.numfonc = e.idFonction 
GROUP BY f.libfonct;
#Q11
SELECT s.libserv , COUNT(*) nb FROM service s 
INNER JOIN employe e ON s.numserv = e.idService 
GROUP BY s.libserv
ORDER BY nb desc;

SELECT s.libserv, COUNT(e.idService) nb FROM employe e 
INNER JOIN service s ON e.idService = s.numserv 
GROUP BY s.numserv 
HAVING nb = (
	SELECT MAX(nb2) FROM (SELECT s.libserv, COUNT(e.idService) nb2 FROM employe e 
	INNER JOIN service s ON e.idService = s.numserv 
	GROUP BY s.numserv ) as result
);

SELECT s.libserv, COUNT(e.idService) nb FROM employe e 
INNER JOIN service s ON e.idService = s.numserv 
GROUP BY s.numserv 
HAVING nb > (
	SELECT AVG(nb2) FROM (SELECT s.libserv, COUNT(e.idService) nb2 FROM employe e 
	INNER JOIN service s ON e.idService = s.numserv 
	GROUP BY s.numserv ) as result
);

SELECT libserv, nom, prenom, salaire
from employe E
INNER JOIN service S ON E.idService =S.numserv
INNER JOIN fonction F ON E.idFonction =F.numfonc
WHERE (S.numserv,salaire) IN (SELECT idService , MAX(salaire)
							FROM fonction F 
							INNER JOIN employe E ON E.idFonction =F.numfonc
							GROUP BY idService);
                            
#Q15. Afficher, pour chaque service, la fonction la plus représentée.                   
SELECT libserv, libfonct, COUNT(*) nb_employe
FROM employe e 
INNER JOIN service s ON e.idService = s.numserv 
INNER JOIN fonction f ON e.idFonction =f.numfonc
GROUP BY libserv, libfonct
HAVING (s.libserv ,nb_employe) IN ( 
	SELECT libserv, MAX(nb2) FROM (
		SELECT libserv, libfonct, COUNT(*) nb2
		FROM employe e 
		INNER JOIN service s ON e.idService = s.numserv 
		INNER JOIN fonction f ON e.idFonction =f.numfonc
		GROUP BY libserv, libfonct
	) as result
	GROUP BY libserv
)
                 
#Q16. Afficher, pour chacune des fonctions, le service qui a le plus grand nombre d’employés dans cette fonction.
SELECT libfonct, libserv, COUNT(*) nb_employe
FROM employe e 
INNER JOIN service s ON e.idService = s.numserv 
INNER JOIN fonction f ON e.idFonction =f.numfonc
GROUP BY  libfonct, libserv
HAVING (f.libfonct ,nb_employe) IN ( 
	SELECT libfonct, MAX(nb2) FROM (
		SELECT libfonct, libserv, COUNT(*) nb2
		FROM employe e 
		INNER JOIN service s ON e.idService = s.numserv 
		INNER JOIN fonction f ON e.idFonction =f.numfonc
		GROUP BY libfonct, libserv
	) as result
	GROUP BY libfonct
)
                 
#Q17. Afficher le service dont la masse salariale est la plus grande.

SELECT libserv, SUM(salaire)FROM service s2 
INNER JOIN employe e ON s2.numserv = e.idService 
INNER JOIN fonction f ON e.idFonction = f.numfonc
GROUP BY libserv
HAVING SUM(salaire) = (
	SELECT MAX(somme) FROM (
		SELECT s.libserv, SUM(salaire) as somme FROM service s 
		INNER JOIN employe e ON s.numserv = e.idService 
		INNER JOIN fonction f ON e.idFonction = f.numfonc
		GROUP BY libserv
	) as result
)








