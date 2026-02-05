import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PeopleContext } from './PeopleProvider';

function PersonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { people, handleDelete, handleSaveName } = useContext(PeopleContext);
  const personId = parseInt(id);

  const foundPerson = people.find(p => p.id === personId);
  
  const [person, setPerson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    if (foundPerson) {
      setPerson(foundPerson);
      setNewName(foundPerson.name);
    }
  }, [foundPerson]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    handleSaveName(person.id, newName);
    setIsEditing(false);
    setPerson({ ...person, name: newName });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewName(person.name);
  };

  const handleDeleteClick = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette personne ?')) {
      handleDelete(person.id);
      navigate('/homepage');
    }
  };

  //---------------------------------------------------------
  // Logique d'affichage et de gestion des erreurs
  //---------------------------------------------------------
  if (!person) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Erreur 404 - Personne non trouvée</h2>
        <p>L'ID {id} ne correspond à aucune personne connue.</p>
        <Link to="/homepage">Retour à la liste</Link>
      </div>
    );
  }
  
  // Le reste du composant (votre JSX) reste le même, utilisant 'person'

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Informations Personnelles ({person.name})</h1>
      {/* ... Votre formulaire et affichage résumé, utilisant 'person.name', 'person.age', etc. */}
      
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        <h2>Résumé</h2>
        <p><strong>Nom:</strong> {isEditing ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : person.name}</p>
        <p><strong>Âge:</strong> {person.age} ans</p>
        <p><strong>Email:</strong> {person.email}</p>
        <p><strong>Pays:</strong> {person.country}</p>
        <div style={{ marginTop: '15px' }}>
          {!isEditing ? (
            <button onClick={handleEdit}>Modifier</button>
          ) : (
            <>
              <button onClick={handleSave}>Sauvegarder</button>
              <button onClick={handleCancel} style={{ marginLeft: '10px' }}>Annuler</button>
            </>
          )}
          <button onClick={handleDeleteClick} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Supprimer</button>
        </div>
      </div>
      <Link to="/homepage">Retour à la liste</Link>
    </div>
  );
}

export default PersonDetails;