import React from 'react';
//import de Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// // import { PeopleProvider } from './PeopleProvider';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './HomePage';
// import PersonDetails from './PersonDetails';
// import AddPerson from './AddPerson';
// import PersonleList from './PersonList.js';
import './app.css';

// ajout des imports des fichiers créés 
import rootReducer from './reducers.js';
import PeopleForm from './PeopleForm.js';
import PeopleList from './PersonList.js';



const store = createStore(rootReducer);

function App() {
//   return (
//     <Router>
//       <PeopleProvider>

//       <div className="App">
//         <h1>Gestion des Personnes</h1>
//       </div>

//       <nav>
//         <ul>
//           <li>
//             <Link to="/homepage">Accueil</Link>
//           </li>
//           <li>
//             <Link to="/addperson">Ajouter une personne</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/homepage" element={<HomePage />} />
//         <Route path="/persondetails/:id" element={<PersonDetails />} />
//         <Route path="/addperson" element={<AddPerson />} />
//         <Route path="/" element={<HomePage />} />
//       </Routes>

//       </PeopleProvider>
//     </Router>
//   );
// }

return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestion des Personnes</h1>
        <PeopleForm />
        <hr/>
        <PeopleList />
      </div>
    </Provider>
  );
};  

export default App;








