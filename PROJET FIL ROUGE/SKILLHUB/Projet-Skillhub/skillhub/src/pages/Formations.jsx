import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import indispensable pour le bouton Détails

const Formations = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Données de test
  const formations = [
    { id: 1, titre: "Développement React Avancé", categorie: "FRONT-END", icone: "fa-code", duree: "20 heures", niveau: "Débutant" },
    { id: 2, titre: "Node.js & Express", categorie: "BACK-END", icone: "fa-server", duree: "25 heures", niveau: "Intermédiaire" },
    { id: 3, titre: "Sécurité Offensive", categorie: "CYBERSÉCURITÉ", icone: "fa-shield-alt", duree: "30 heures", niveau: "Avancé" },
    { id: 4, titre: "Administration Cisco", categorie: "RÉSEAU", icone: "fa-network-wired", duree: "15 heures", niveau: "Débutant" },
  ];

  // Logique de filtrage dynamique
  const formationsFiltrees = formations.filter(f =>
    f.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.categorie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      {/* Titre de la page */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">Catalogue des formations</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Découvrez nos formations professionnelles et développez vos compétences à Castres.</p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search text-slate-400 text-lg"></i>
            </div>
            <input 
              type="text" 
              placeholder="Rechercher une formation (ex: React, Réseau...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff9715]"
            />
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-[#2C3E50] font-semibold rounded-xl transition-colors w-full lg:w-auto justify-center"
          >
            <i className="fas fa-filter"></i>
            Filtres {showFilters ? '▲' : '▼'}
          </button>
        </div>

        {/* Filtres déroulants */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-slate-100 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Catégorie</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none">
                  <option value="">Toutes les catégories</option>
                  <option value="front">Front-end</option>
                  <option value="back">Back-end</option>
                  <option value="cyber">Cybersécurité</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Niveau</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none">
                  <option value="">Tous les niveaux</option>
                  <option value="debutant">Débutant</option>
                  <option value="intermediaire">Intermédiaire</option>
                  <option value="avance">Avancé</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Durée</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none">
                  <option value="">Toutes les durées</option>
                  <option value="court">{"< 20h"}</option>
                  <option value="long">{"> 20h"}</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Liste des formations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {formationsFiltrees.length > 0 ? (
          formationsFiltrees.map((f) => (
            <div key={f.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-50 group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-orange-100 text-[#ff9715] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase">
                      {f.categorie}
                    </span>
                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-2 group-hover:text-[#ff9715] transition-colors">{f.titre}</h3>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-[#ff9715] transition-colors">
                    <i className={`fas ${f.icone} text-[#ff9715] group-hover:text-white text-2xl`}></i>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Développez vos compétences en {f.titre}. Une formation intensive et pratique pour booster votre carrière professionnelle.
                </p>
                <div className="flex items-center gap-6 mb-8 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock text-[#ff9715]"></i>
                    <span>{f.duree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-signal text-[#ff9715]"></i>
                    <span>{f.niveau}</span>
                  </div>
                </div>
                
                {/* Utilisation de Link pour aller vers la page détail */}
                <Link 
                  to={`/formation/${f.id}`} 
                  className="w-full block text-center bg-[#2C3E50] hover:bg-black text-white font-semibold py-3 rounded-xl transition-all shadow-md"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <i className="fas fa-search text-4xl text-slate-300 mb-4"></i>
            <p className="text-slate-500">Aucune formation ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Formations;