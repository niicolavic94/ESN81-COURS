import React, { useState, useContext } from 'react';
import { PeopleContext } from './PeopleProvider';

function AddPerson() {
  // Accède aux fonctions du Context
  const { addPerson } = useContext(PeopleContext); 
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && age) {
      addPerson({ 
        name: name, 
        age: parseInt(age, 10) 
      });

      setName('');
      setAge('');
    } else {
      alert('Veuillez remplir le nom et l\'âge.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <h3>Ajouter une nouvelle personne</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nom:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Âge:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddPerson;