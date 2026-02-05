

// Exercice 1 : Ranger les oeufs
    function promptEggs(){
   const zeux = prompt ("Combien d'œufs avez-vous ?");
    const boites = Math.floor(zeux/12);
    const reste = zeux % 12;
    console.log(`Cela fait ${boites} boîtes et il reste ${reste} œufs`);
};

// Exercice 2 : Ciblage en JS

// Question 1 : 
const title = document.getElementById("title");
console.log(title);

const elegant = document.getElementsByClassName("elegant");
console.log(elegant);

const titre2 = document.getElementsByTagName("h2");
console.log(titre2);

const a = document.getElementsByClassName("more a");
console.log(a);

const footer = document.querySelectorAll(" footer a");
console.log(footer); 


// Question 2 : 
// texte du H1
const h1 = document.querySelectorElement("h1");
console.log(h1);
// code html du dernier paragraphe du dernier article
const lastBloc = document.getElementsByClassName('bloc last');
console.log(lastBloc);
// nombre d'éléments avec la classe "elegant"
const elegantElements = document.getElementsByClassName('elegant');
const nombre = elegantsElements.length;
console.log(nombre);


// Question 3 :

// 2nd LI dans UL
const star = document.getElementById('ul>li: nth-child(2)');
console.log(star);
// texte 
console.log(star.textContent);
// id
console.log(star.id);
// parent direct 
console.log(star.parentElement);
// nombre d'éléments enfants 
console.log(star.childElementCount);
// contenu HTML de chacun de ses enfants
const children = star.children;
for (let i = 0; i < children.length; i++) {
    console.log(children[i].textContent);
} 
// id de l'élément précédent
console.log(star.previousElementSibling.id);
// id de l'élément suivant
console.log(star.nextElementSibling.id);

// Exercice 3 : Jours d'ouverture 

// Afficher la date & le jour dans la balise p#day 
const pDay = document.getElementById('day');
const today = new Date();
pDay.textContent = today.toLocaleDateString('fr-FR', options);

//   en fonction du jour de la semaine, dans la balise div#message.
const messageDiv = document.getElementById('message');
const dayOfWeek = today.getDay(); // 0 (Dimanche) à 6 (Samedi)
const messageDiv2= document.getElementById('message');
const hourOfDay = today.getHours();

if (dayOfWeek === 0 || dayOfWeek === 6, hourOfDay < 10 || hourOfDay >= 18 ) {
    messageDiv.textContent = "Nous sommes fermés !";
} else {
    messageDiv.textContent = "Nous sommes ouverts";
}


// Exerice 4 : Thème jour/nuit 


// jour 8-18h - 
// nuit 18-8h - texte clair fond foncé
addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const now = new Date();
    const hour = now.getHours();
     
    if (hour >= 8 && hour < 18) {
        // Jour
        // body.style.backgroundColor = '#ffffff'; // fond clair
        // body.style.color = '#000000'; // texte foncé
    } else {
        // Nuit
        body.style.backgroundColor = '#000000'; // fond foncé
        body.style.color = '#ffffff'; // texte clair
    }
});

// Exercice 5 : 
// Générer un nombre aléatoire entre 0 et 99
const nombreAleatoire = Math.floor(Math.random() * 100);
document.getElementById('message').textContent = nombreAleatoire;

// Exerice 6 : 
const numbers = [0,1,2,3,4,5,6,7,8,9]
while(numbers.length){
  const random = Math.floor(Math.random() * numbers.length);
  const number = numbers.splice(random, 1)[0];
// ajout pour la création du bouton 
  const btn = document.createElement('button');
  btn.textContent = number;
  document.body.appendChild(btn);       
};