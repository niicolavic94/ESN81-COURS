import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Calendrier = () => {
  // État pour le filtrage par catégorie
  const [filter, setFilter] = useState("Toutes");

  const sessions = [
    { id: 1, date: "15/02/2026", categorie: "Frontend", couleur: "bg-blue-100 text-blue-700", titre: "Développement React Avancé", places: "5 places restantes", complet: false },
    { id: 2, date: "20/02/2026", categorie: "Cybersécurité", couleur: "bg-red-100 text-red-700", titre: "Sécurité des réseaux LAN", places: "3 places restantes", complet: false },
    { id: 3, date: "22/02/2026", categorie: "Backend", couleur: "bg-green-100 text-green-700", titre: "Architecture Node.js", places: "Complet", complet: true }
  ];

  // Logique de filtrage
  const filteredSessions = filter === "Toutes" 
    ? sessions 
    : sessions.filter(s => s.categorie === filter);

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in">
      {/* Section Hero */}
      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e0e8f0] py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-4">
            Calendrier des <span className="text-[#27AE60]">sessions en présentiel</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Retrouvez ici toutes nos sessions de formation en présentiel à <span className="font-semibold text-[#2C3E50]">Castres</span>.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 lg:px-8">
        {/* Filtres Interactifs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {["Toutes", "Frontend", "Backend", "Cybersécurité"].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                  filter === cat 
                  ? 'bg-[#27AE60] text-white' 
                  : 'bg-white border border-slate-200 text-[#2C3E50] hover:bg-slate-50'
                }`}
              >
                {cat === "Toutes" ? "Toutes les catégories" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tableau des sessions */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Catégorie</th>
                  <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Formation</th>
                  <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Places</th>
                  <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredSessions.map((session) => (
                  <tr key={session.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 whitespace-nowrap font-medium text-[#2C3E50]">{session.date}</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${session.couleur}`}>
                        {session.categorie}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Link to={`/formation/${session.id}`} className="text-[#2C3E50] hover:text-[#27AE60] font-semibold transition-colors">
                        {session.titre}
                      </Link>
                    </td>
                    <td className={`py-4 px-6 whitespace-nowrap text-sm ${session.complet ? 'text-red-500 font-bold uppercase' : 'text-slate-600'}`}>
                      {session.places}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {session.complet ? (
                        <button className="bg-slate-300 text-white px-5 py-2 rounded-lg cursor-not-allowed text-sm font-bold w-full md:w-auto" disabled>
                          Complet
                        </button>
                      ) : (
                        <Link to="/auth" className="bg-[#27AE60] text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-bold inline-block text-center w-full md:w-auto shadow-md">
                          S'inscrire
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Localisation avec Google Maps réel */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-6 flex items-center">
            <i className="fas fa-map-marked-alt mr-3 text-[#27AE60]"></i>Lieu de formation à Castres
          </h2>
          <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 h-[400px]">
            <iframe
              title="Plan d'accès SkillHub Castres"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.385312386127!2d2.2513903123169055!3d43.59851607900146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae386348600001%3A0xc546452f1e2f759c!2sPurple%20Campus%20Castres!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
          <div className="mt-4 flex items-center p-4 bg-slate-50 rounded-xl">
            <i className="fas fa-location-dot text-[#27AE60] mr-3 text-xl"></i>
            <div>
              <p className="font-bold text-[#2C3E50]">Purple Campus / ENS81</p>
              <p className="text-slate-600">57 Rue Firmin Oulès, 81100 Castres</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendrier;