import React from 'react';

const ApprenantDashboard = () => {
  const stats = [
    { label: "Formations suivies", val: "3", icon: "fa-book-open", color: "text-blue-600" },
    { label: "Prochaine session", val: "15 Fév", icon: "fa-calendar-check", color: "text-green-600" },
    { label: "Certifications", val: "1", icon: "fa-certificate", color: "text-orange-500" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-4 lg:p-8 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        
        {/* HEADER INTÉGRÉ APPRENANT */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#27AE60] to-[#2C3E50] flex items-center justify-center text-white text-2xl font-bold shadow-md">
              L
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2C3E50]">Bonjour, Lucas Martin !</h1>
              <p className="text-slate-500">Espace Apprenant • SkillHub Castres</p>
            </div>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
            Mon Profil
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
            <h2 className="text-xl font-bold text-[#2C3E50] mb-2">Mes formations en cours</h2>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 text-[#27AE60] rounded-full flex items-center justify-center">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C3E50]">React & Modern Web</h3>
                  <p className="text-xs text-slate-400">Prochaine session : 15 Février</p>
                </div>
              </div>
              <span className="bg-green-100 text-[#27AE60] px-3 py-1 rounded-full text-[10px] font-black uppercase">Confirmé</span>
            </div>
          </div>

          <div className="bg-[#2C3E50] text-white p-8 rounded-3xl shadow-xl">
            <h3 className="font-bold text-xl mb-4">Support</h3>
            <p className="text-slate-300 text-sm mb-6">Une question sur vos cours ? Notre équipe vous répond en moins de 2h.</p>
            <button className="w-full bg-[#ff9715] py-3 rounded-xl font-bold">Ouvrir un ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprenantDashboard;