import React from 'react';

const FormateurDashboard = () => {
  const stats = [
    { label: "Sessions animées", val: "12", icon: "fa-chalkboard-teacher", color: "text-[#27AE60]" },
    { label: "Apprenants formés", val: "145", icon: "fa-users", color: "text-purple-600" },
    { label: "Note moyenne", val: "4.9/5", icon: "fa-star", color: "text-yellow-500" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-4 lg:p-8 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        
        {/* HEADER INTÉGRÉ FORMATEUR */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#ff9715] to-[#2C3E50] flex items-center justify-center text-white text-2xl font-bold shadow-md">
              A
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2C3E50]">Bonjour, Alexis Romero !</h1>
              <p className="text-slate-500 font-medium">Espace Formateur • SkillHub Castres</p>
            </div>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-[#ff9715] text-white rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
            + Nouvelle Session
          </button>
        </div>

        {/* GRILLE DE STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center">
              <div className={`p-4 rounded-xl bg-slate-50 mr-4 ${s.color}`}>
                <i className={`fas ${s.icon} text-2xl`}></i>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">{s.label}</p>
                <p className="text-2xl font-bold text-[#2C3E50]">{s.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-[#2C3E50] mb-2">Mon Planning d'Intervention</h2>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-[#ff9715] shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-bold text-[#2C3E50]">Architecture Backend Node.js</h3>
                <p className="text-sm text-slate-500"><i className="fas fa-map-marker-alt mr-2"></i>Salle B • 22 Février</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-[#ff9715] uppercase tracking-widest">12 Inscrits</p>
                <button className="text-xs font-bold text-[#2C3E50] hover:underline mt-1">Émargement</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-[#2C3E50] mb-4">Ressources Pédagogiques</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-100">
                <i className="far fa-file-pdf mr-3 text-red-500"></i> Plan_du_cours.pdf
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-100">
                <i className="far fa-file-word mr-3 text-blue-500"></i> Liste_emargement.docx
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormateurDashboard;