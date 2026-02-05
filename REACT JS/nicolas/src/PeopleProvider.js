import React, { createContext, useState } from 'react';

// 1. Création du Context
export const PeopleContext = createContext();

// 2. Création du Provider
export const PeopleProvider = ({ children }) => {

  const [people, setPeople] = useState([
    { id: 1, name: 'Alice', age: 30, email: 'aliice@gmail.com', country: 'France' },
     { id: 2, name: 'Bob', age: 25, email: ' bob@gmail.com', country: 'USA' }, 
     { id: 3, name: 'Charlie', age: 35, email: 'charlie@gmail.com', country: 'UK' },
  ]);

  // Fonction pour ajouter une nouvelle personne
  const addPerson = (newPerson) => {
    // Utilisation de Date.now() pour garantir un ID unique
    const personWithId = { ...newPerson, id: Date.now() }; 
    
    setPeople((prevPeople) => [...prevPeople, personWithId]);
  };

  // Fonction pour supprimer une personne
  const handleDelete = (idToDelete) => {
    setPeople(prevPeople => prevPeople.filter(person => person.id !== idToDelete));
  };
  
  // Fonction pour sauvegarder le nouveau nom d'une personne
  const handleSaveName = (idToUpdate, newName) => {
    setPeople(prevPeople => prevPeople.map(person => 
      person.id === idToUpdate ? { ...person, name: newName } : person
    ));
  };


  // 3. Valeurs exposées par le Context
  const contextValue = {
    people,
    addPerson,
    handleDelete,
    handleSaveName,
  };

  return (
    <PeopleContext.Provider value={contextValue}>
      {children}
    </PeopleContext.Provider>
  );
};
