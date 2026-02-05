import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FormationDetail = () => {
  // 1. On récupère l'ID passé dans l'URL (ex: /formation/1)
  const { id } = useParams();

  // 2. Simulation d'une base de données (idéalement, ceci viendrait d'un fichier data.js ou d'une API)
  const catalogueFormations = {
    "1": { 
      titre: "Développement React Avancé", 
      categorie: "Frontend", 
      couleur: "blue",
      description: "Maîtrisez les concepts avancés de React pour créer des interfaces web performantes et scalables.",
      duree: "21 heures (3 jours)",
      formateur: "Alexis Romero",
      date: "15 au 17 Février 2026",
      programme: ["Gestion d'état avec Redux", "Optimisation Performance", "Hooks Personnalisés"]
    },
    "2": { 
      titre: "Node.js & Express Architecture", 
      categorie: "Backend", 
      couleur: "green",
      description: "Apprenez à construire des API REST sécurisées et performantes avec l'écosystème Node.js.",
      duree: "25 heures (4 jours)",
      formateur: "Thomas Durand",
      date: "22 au 25 Février 2026",
      programme: ["Middleware & Routing", "Authentification JWT", "Bases de données NoSQL"]
    },
    // Ajoute les autres ID ici (3, 4...)
  };

  // 3. On sélectionne la formation correspondante ou une par défaut
  const formation = catalogueFormations[id] || catalogueFormations["1"];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 animate-fade-in">
      {/* Fil d'Ariane */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-[#27AE60]">Accueil</Link> / 
        <Link to="/formations" className="hover:text-[#27AE60] ml-1">Catalogue</Link> / 
        <span className="text-[#2C3E50] font-medium ml-1">{formation.titre}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne de Gauche */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-50">
            <span className={`px-3 py-1 bg-${formation.couleur}-100 text-${formation.couleur}-700 rounded-full text-xs font-bold uppercase mb-4 inline-block`}>
              {formation.categorie}
            </span>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">{formation.titre}</h2>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="mb-4 text-slate-600">{formation.description}</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
                {formation.programme.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#27AE60] flex items-center justify-center text-white border-2 border-white">
                  <i className="fas fa-users text-xs"></i>
                </div>
                <span className="pl-4 text-sm text-slate-500 self-center">Session limitée à 12 personnes</span>
              </div>
              <Link to="/auth" className="bg-[#27AE60] hover:bg-green-700 text-white font-bold py-3 px-10 rounded-xl transition-all shadow-md">
                S'inscrire à la session
              </Link>
            </div>
          </div>

          {/* Programme dynamique */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-50">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 italic border-l-4 border-[#ff9715] pl-4">
              Points clés de la formation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {formation.programme.map((step, i) => (
                 <div key={i} className="flex items-center p-4 bg-slate-50 rounded-lg">
                   <span className="text-[#ff9715] font-bold mr-3">{i + 1}.</span>
                   <span className="text-slate-700 font-medium">{step}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Colonne de Droite : Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24 border border-slate-100">
            <div className="space-y-6">
              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                <i className="fas fa-calendar-alt text-[#ff9715] w-10 text-xl"></i>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Prochaine Session</p>
                  <p className="font-semibold text-[#2C3E50]">{formation.date}</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                <i className="fas fa-clock text-[#ff9715] w-10 text-xl"></i>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Durée totale</p>
                  <p className="font-semibold text-[#2C3E50]">{formation.duree}</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-xl">
                <i className="fas fa-user-tie text-[#ff9715] w-10 text-xl"></i>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Expert Formateur</p>
                  <p className="font-semibold text-[#2C3E50]">{formation.formateur}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-xs text-center text-[#ff9715] font-bold mb-2 uppercase">Certifié Qualiopi</p>
              <p className="text-sm text-center text-slate-600 italic">Formation éligible aux financements OPCO et CPF.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetail;