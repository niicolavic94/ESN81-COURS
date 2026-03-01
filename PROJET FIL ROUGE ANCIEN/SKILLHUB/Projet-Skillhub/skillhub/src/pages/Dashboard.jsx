import React, { useState } from 'react';

const Dashboard = () => {
  // Simulation du rôle (tu pourras plus tard changer ça avec un vrai système d'auth)
  const [role, setRole] = useState('apprenant'); // 'apprenant' ou 'formateur'

  const userData = {
    apprenant: {
      nom: "Lucas Martin",
      stats: [
        { label: "Formations suivies", val: "3", icon: "fa-book-open", color: "text-blue-600" },
        { label: "Prochaine session", val: "15 Fév", icon: "fa-calendar-check", color: "text-green-600" },
        { label: "Certifications", val: "1", icon: "fa-certificate", color: "text-orange-500" }
      ],
      sessions: [
        { id: 1, titre: "React Avancé", date: "15/02/2026", status: "Confirmé", formateur: "Alexis R." },
        { id: 2, titre: "UI/UX Design", date: "10/03/2026", status: "En attente", formateur: "Sophie L." }
      ]
    },
    formateur: {
      nom: "Alexis Romero",
      stats: [
        { label: "Sessions animées", val: "12", icon: "fa-chalkboard-teacher", color: "text-[#27AE60]" },
        { label: "Apprenants formés", val: "145", icon: "fa-users", color: "text-purple-600" },
        { label: "Note moyenne", val: "4.9/5", icon: "fa-star", color: "text-yellow-500" }
      ],
      planning: [
        { id: 1, formation: "React Avancé", date: "15/02/2026", inscrits: 8, salle: "Salle A (Castres)" },
        { id: 2, formation: "Node.js Architecture", date: "22/02/2026", inscrits: 12, salle: "Salle B (Castres)" }
      ]
    }
  };

  const data = userData[role];

  return (
    <div className="bg-slate-50 min-h-screen p-4 lg:p-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#27AE60] to-[#2C3E50] flex items-center justify-center text-white text-2xl font-bold">
              {data.nom.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2C3E50]">Bonjour, {data.nom} !</h1>
              <p className="text-slate-500 capitalize">Espace {role} • SkillHub Castres</p>
            </div>
          </div>
          <button 
            onClick={() => setRole(role === 'apprenant' ? 'formateur' : 'apprenant')}
            className="text-xs bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg font-bold text-slate-600 transition-colors"
          >
            Switch vers vue {role === 'apprenant' ? 'Formateur' : 'Apprenant'}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.stats.map((s, i) => (
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

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-[#2C3E50] mb-4">
              {role === 'apprenant' ? "Mes prochaines formations" : "Mon planning d'intervention"}
            </h2>
            
            {role === 'apprenant' ? (
              data.sessions.map(s => (
                <div key={s.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-bold text-lg text-[#2C3E50]">{s.titre}</h3>
                    <p className="text-sm text-slate-500"><i className="far fa-calendar mr-2"></i>{s.date} • avec {s.formateur}</p>
                  </div>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold ${s.status === 'Confirmé' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {s.status}
                  </span>
                </div>
              ))
            ) : (
              data.planning.map(p => (
                <div key={p.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg text-[#2C3E50]">{p.formation}</h3>
                    <p className="text-sm text-slate-500"><i className="fas fa-map-marker-alt mr-2"></i>{p.salle}</p>
                    <p className="text-xs text-[#27AE60] mt-1 font-bold">{p.inscrits} apprenants inscrits</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#2C3E50]">{p.date}</p>
                    <button className="text-[#27AE60] text-sm font-bold hover:underline">Gérer la liste</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sidebar Dashboard */}
          <div className="space-y-6">
            <div className="bg-[#2C3E50] text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold mb-4">Besoin d'aide ?</h3>
              <p className="text-sm text-slate-300 mb-6">Un problème avec une session ou une facture ? Notre équipe de Castres est là.</p>
              <button className="w-full bg-[#ff9715] hover:bg-orange-600 py-3 rounded-xl font-bold transition-colors">
                Contacter le support
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-[#2C3E50] mb-4">Documents récents</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-slate-600 hover:text-[#27AE60] cursor-pointer">
                  <i className="far fa-file-pdf mr-3 text-red-500"></i> Convocation_React.pdf
                </div>
                <div className="flex items-center text-sm text-slate-600 hover:text-[#27AE60] cursor-pointer">
                  <i className="far fa-file-pdf mr-3 text-red-500"></i> Facture_Fevrier.pdf
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;