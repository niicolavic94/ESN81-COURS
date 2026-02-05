import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import des pages - La casse doit être identique aux noms de tes fichiers
import Home from './pages/Home';
import Formations from './pages/formations';
import FormationDetail from './pages/formationDetail';
import Calendrier from './pages/Calendrier';
import Autentification from './pages/Autentification'; 
import DevenirFormateur from './pages/DevenirFormateur';
import DevenirApprenant from './pages/DevenirApprenant';
import ApprenantDashboard from './pages/ApprenantDashboard';
import FormateurDashboard from './pages/FormateurDashboard';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Routes>
      {/* Route principale avec le Header et le Footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="formations" element={<Formations />} />
        <Route path="formation/:id" element={<FormationDetail />} />
        <Route path="calendrier" element={<Calendrier />} />
        <Route path="devenir-formateur" element={<DevenirFormateur />} />
        <Route path="devenir-apprenant" element={<DevenirApprenant />} />

        <Route path="/auth" element={<Autentification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardapprenant" element={<ApprenantDashboard/>} />
        <Route path="/dashboardformateur" element={<FormateurDashboard/>} />
      </Route>
     
    </Routes>
  );
}

export default App;