import React, { useState } from 'react';

function Person(props) {
  // L'âge est géré localement pour l'incrémentation (handleBirthday)
  const [age, setAge] = useState(props.age);
  // Le nom est géré localement pour permettre l'édition en cours (handleNameChange)
  const [name, setName] = useState(props.name);

  const handleBirthday = () => {
    setAge(age + 1);
  };
  
  const handleDelete = () => {
    // Appelle la fonction du Context pour supprimer cette personne par son ID
    props.handleDelete(props.id); 
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value); 
  };
  
  const handleSaveName = () => {
    // Appelle la fonction du Context pour mettre à jour le nom dans l'état global
    props.handleSaveName(props.id, name); 
  };
  
  return (
    <div className="Person-card"> 
      <div className="Person-info">
        <p>Je suis <input type="text" value={name} onChange={handleNameChange} /> et j'ai **{age}** ans.</p>
      </div>
      <div className="Person-actions"> 
        <button className="btn-age" onClick={handleBirthday}>Augmenter âge</button>
        <button className="btn-save" onClick={handleSaveName}>Sauvegarder le nom</button>
        <button className="btn-delete" onClick={handleDelete}>Supprimer</button>
      </div>
    </div>
  );
}

export default Person;