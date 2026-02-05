// import React, { useContext } from 'react';
// import { PeopleContext } from './PeopleProvider';
// import Person from './Person'; 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePerson, updatePerson } from './actions';

function PersonList() {
//   // Récupère les données et fonctions nécessaires du Context
//   const { people, handleDelete, handleSaveName } = useContext(PeopleContext); 

//   return (
//     <div style={{ marginTop: '20px' }}>
//       <h2>Liste des Personnes ({people.length})</h2>
//       <div className="Person-list-container">
//         {people.map(person => (
//           // Affiche chaque personne en lui passant les fonctions de modification
//           <Person 
//             key={person.id} 
//             id={person.id}
//             name={person.name} 
//             age={person.age} 
//             handleDelete={handleDelete}
//             handleSaveName={handleSaveName}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




      const people = useSelector(state => state.people);
      const dispatch = useDispatch();

      return (
          <div>
              <h2>Liste des personnes</h2>
              <ul>
                  {people.map(p => (
                      <li key={p.id}>
                          {p.name} - {p.age} ans 
                          <button onClick={() => dispatch(updatePerson(p))}>Modifier</button>
                          <button onClick={() => dispatch(deletePerson(p.id))}>Supprimer</button>
                      </li>
                  ))}
              </ul>
          </div>
      );
  };



export default PersonList;

