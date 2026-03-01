import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // H majuscule
import Footer from '../components/Footer'; // F majuscule

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* L'Outlet affiche dynamiquement le contenu de la route actuelle */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;