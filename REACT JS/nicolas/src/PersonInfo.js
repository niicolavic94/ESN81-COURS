import React, { useState, useEffect } from 'react';

function PersonInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);

  const fetchUser = (id) => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  const handleChangeUser = () => {
    const newId = parseInt(prompt('Entrez l\'ID de l\'utilisateur (1-10):'), 10);
    if (newId >= 1 && newId <= 10) {
      setUserId(newId);
    } else {
      alert('ID invalide. Veuillez entrer un nombre entre 1 et 10.');
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Informations de la Personne</h1>
      <button onClick={handleChangeUser} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        Changer d'utilisateur
      </button>
      {user && (
        <div>
          <p><strong>Nom:</strong> {user.name}</p>
          <p><strong>Âge:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Ville:</strong> {user.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default PersonInfo;