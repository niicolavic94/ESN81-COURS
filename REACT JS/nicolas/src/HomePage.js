import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PeopleContext } from './PeopleProvider';
import AddPerson from './AddPerson';

function HomePage() {
  const { people } = useContext(PeopleContext);

  if (!people || people.length === 0) {
    return <div>Chargement des personnes ou liste vide.</div>;
  }
  
  return (
    <div>
      <h2>Bienvenue sur la page d'accueil</h2>
      <p>Ceci est la page principale de l'application de gestion des personnes.</p>

      <AddPerson />

      <h3>Liste des Personnes :</h3>

      <ul>
        {/* 3. Affichez la liste des personnes et créez un lien cliquable (Objectif 3 du TD) */}
        {people.map((person) => (
          <li key={person.id}>
            {/* Le lien dynamique utilise l'ID de la personne pour rediriger */}
            <Link to={`/persondetails/${person.id}`}>Gestion de {person.name}</Link>
          </li>
        ))}
      </ul>

    </div>
  );
}
export default HomePage;