
// Exercice 1 : Fonction simple
function conversion(valeur) {
  return valeur * 1.8 + 32;
}

let saisie = prompt("Entrez une température en degrés Celsius :");
let celsius = parseFloat(saisie);

if (!isNaN(celsius)) {
    let resultatFarenheit = conversion(celsius);

    console.log(celsius + "°C est égal à " + resultatFarenheit + "°F");
} else {
    console.log("Erreur : Veuillez entrer un nombre valide.");
}

/* Exercice 2 : appeler une fonction dans un programme
A. Ecrire une fonction isValid() qui prend en paramètre une chaîne de caractère, qui retourne true si 
cette chaîne contient un « @ » et qui retourne false dans le cas contraire.
B. Ecrire un programme qui demande à l’utilisateur de saisir une adresse email (en utilisant la 
fonction prompt), qui appelle la fonction isValid() et affiche en console la validité de l’adresse*/
// A 
function isValid(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
}
};
// B
let emailSaisie = prompt("Veuillez saisir une adresse email :");
let validite = isValid(emailSaisie);
console.log("L'adresse email est valide : " + validite);


/* Exercice 3 : Méthodologie Indiquer pour chaque extrait de code, la cible, l’événement et l’action. 
*/
const target = document.querySelector('h1'); //titre h1
target.addEventListener('click', action); // au click de la souros
 function action() {    
console.log( 'click sur le titre' ); } // Affiche click sur le titre 


const target2 = document.getElementById('p1'); // paragraphe p1
 target2.addEventListener('click', function() {     // au click de la souris
    console.log( 'click sur le paragraphe' ); // Affiche click sur le paragraphe
 });

 const target3 = document.getElementById('mask'); // mask 
  target3.addEventListener('click', () => {   // au click de la souris 
     const img = document.getElementById('img2');  // image img2 ne s'affiche plus
     img.style.display='none' ; });

// Exercice 4 : Syntaxe Corriger les fautes dans les instructions suivantes 
const cible = document.querySelector('h1 #titre'); // espace entre les deux 
cible.addEventListener('click', action); // 'click' entre quotes
function action( ) {    
    console.log(event.target);
 }

 /* Exercice 5 : Les soldes On dispose du code html suivant :
  <div id="soldes"> 
  <p>Soldes du 15 juin au 15 juillet</p> 
  <a href="#">Ok, j'ai compris</a>
   </div>
    et du code css : 
    #soldes.hidden{ display: none; } 
    Mettre en place un gestionnaire d’événement de telle sorte que 
    le div soit masqué lorsque l’utilisateur clique sur le lien. */

const soldesDiv = document.getElementById('soldes');
const lien = soldesDiv.querySelector('a');
lien.addEventListener('click', function(event) {
    event.preventDefault();
    soldesDiv.classList.add('hidden');
}); 


/* Exercice 6 : Mot de passe Transformer un input de type password en type texte 
à l’aide d’un bouton et rendre le mot de passe visible. */
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');
toggleButton.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; 
    } else {
        passwordInput.type = 'password'; 
    }   
}); 


/* Exercice 7 : Thème jour/nuit
 Créer un fichier html avec un titre, un bouton (« mode nuit ») et un bouton (« mode jour »).
  Associer un fichier css. 
  Centrer les éléments sur la page. 
  On souhaite inverser les contrastes lorsque l’utilisateur clique sur les boutons. 
• Quelle seront les cibles ? Quels seront les événements ? Quels seront les actions ? 
• Ecrire les instructions JS pour ajouter la classe « dark » à l’élément <body>
   lorsque l’utilisateur clique sur le bouton « nuit ».
    Compléter le css, pour que le style de la page soit modifié : écriture claire et fond foncé. 
• Modifier les instructions JS pour retirer la classe « dark » 
à l’élement <body> lorsque l’utilisateur clique sur le bouton « jour » */

const body = document.body;
const nightButton = document.getElementById('nightMode');
const dayButton = document.getElementById('dayMode'); 
nightButton.addEventListener('click', function() {
    body.classList.add('dark'); 
});
dayButton.addEventListener('click', function() {
    body.classList.remove('dark'); 
});

/* Exercice 8 : Masquer l’image Créer un fichier html avec un titre, 
une image et un bouton. Associer un fichier css. Centrer les éléments sur la page.
 On souhaite masquer l’image lorsque l’utilisateur clique sur le bouton.
  Quelle sera la cible ? Quel sera l’événement ? Quelle sera l’action ?
• Ecrire les instructions JS pour ajouter le style display « none » à l’image, 
lorsque l’utilisateur clique sur ce bouton.
• Ecrire les instructions JS pour ajouter le style display «block» à l’image,
 lorsque l’utilisateur clique sur ce bouton et que l’image est invisible.
• Modifier le texte du bouton en fonction de la situation (Afficher l’image / Masque l’image) */
const image = document.getElementById('imageToToggle');
const toggleImageButton = document.getElementById('toggleImageButton');
toggleImageButton.addEventListener('click', function() {
    if (image.style.display === 'none') {
        image.style.display = 'block'; 
        toggleImageButton.textContent = 'Masquer l’image'; 
    } else {
        image.style.display = 'none'; 
        toggleImageButton.textContent = 'Afficher l’image'; 
    }  
});


// EXO 9 : Formulaire de login 

const boutonsChiffres = document.querySelectorAll('.btn-chiffre'); // adapter la classe
const puces = document.querySelectorAll('.puce'); // adapter la classe
const btnConnecter = document.getElementById('btnConnecter');
const btnReset = document.getElementById('btnReset');

let nbPucesGrisees = 0;

boutonsChiffres.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if (nbPucesGrisees < puces.length) {
            puces[nbPucesGrisees].style.backgroundColor = 'grey';
            nbPucesGrisees++;
            
            // Afficher le bouton reset dès le premier clic
            btnReset.style.display = 'block';
            
            // Activer "se connecter" si 6 puces sont grisées
            if (nbPucesGrisees === 6) {
                btnConnecter.disabled = false;
            }
        }
    });
});

// Bonus : Réinitialisation
btnReset.addEventListener('click', () => {
    puces.forEach(p => p.style.backgroundColor = 'white');
    nbPucesGrisees = 0;
    btnConnecter.disabled = true;
    btnReset.style.display = 'none';
});


// EXO 10 : FAQ 

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const reponse = question.nextElementSibling; // Cible l'élément juste après la question
        if (reponse.style.display === 'block') {
            reponse.style.display = 'none';
        } else {
            reponse.style.display = 'block';
        }
    });
});

// EXO 11 : Temporalisation d'evenements

let timer;
const btnTempo = document.getElementById('btnTempo');

btnTempo.addEventListener('click', () => {
    // On annule le timer en cours s'il existe
    clearTimeout(timer);
    
    console.log("Clic détecté, attente de 3 secondes...");

    // On lance un nouveau timer
    timer = setTimeout(() => {
        console.log("Message affiché après 3 secondes d'inactivité !");
    }, 3000);
});