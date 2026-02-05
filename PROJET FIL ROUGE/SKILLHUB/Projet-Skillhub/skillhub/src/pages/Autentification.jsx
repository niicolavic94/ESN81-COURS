import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Authentification = () => {
  const [activeTab, setActiveTab] = useState('login'); 
  const [role, setRole] = useState('apprenant');
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="animate-fade-in font-sans bg-slate-50 min-h-screen pb-20">
      {/* Header dynamique */}
      <section className="bg-slate-900 py-16 text-center transition-all duration-500 text-white">
        <h2 className={`text-4xl font-black mb-2 uppercase tracking-tighter transition-colors ${activeTab === 'login' ? 'text-[#ff9715]' : 'text-[#27AE60]'}`}>
          {activeTab === 'login' ? 'Espace Connexion' : 'Créer un Compte'}
        </h2>
        <p className="text-slate-400 text-lg opacity-80">
          {activeTab === 'login' ? 'Ravi de vous revoir !' : 'Commencez votre formation dès aujourd\'hui.'}
        </p>
      </section>

      <main className="-mt-10 px-4">
        <div className="max-w-[500px] mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
          
          {/* NAVIGATION DES ONGLETS : TEXTE ORANGE ET VERT SI ACTIF */}
          <div className="flex p-3 bg-slate-100 gap-3">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 rounded-2xl text-xs font-black transition-all tracking-[0.2em] flex items-center justify-center border-2 ${
                activeTab === 'login' 
                ? 'bg-white border-[#ff9715] text-[#ff9715] shadow-md scale-100' // Fond blanc, texte Orange
                : 'bg-transparent border-transparent text-slate-400 opacity-60' 
              }`}
            >
              <i className="fas fa-lock mr-2"></i>
              CONNEXION
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-4 rounded-2xl text-xs font-black transition-all tracking-[0.2em] flex items-center justify-center border-2 ${
                activeTab === 'register' 
                ? 'bg-white border-[#27AE60] text-[#27AE60] shadow-md scale-100' // Fond blanc, texte Vert
                : 'bg-transparent border-transparent text-slate-400 opacity-60'
              }`}
            >
              <i className="fas fa-user-plus mr-2"></i>
              INSCRIPTION
            </button>
          </div>

          <div className="p-8 lg:p-12">
            <form onSubmit={handleAuth} className="space-y-6">
              
              {activeTab === 'register' && (
                <div className="animate-slide-down">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 block text-center">Je souhaite devenir :</label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div 
                      onClick={() => setRole('apprenant')}
                      className={`relative cursor-pointer p-5 rounded-2xl border-4 transition-all duration-300 text-center ${role === 'apprenant' ? 'border-[#27AE60] bg-green-50 scale-105 shadow-md' : 'border-slate-100 bg-white opacity-40'}`}
                    >
                      {role === 'apprenant' && <i className="fas fa-check-circle absolute top-2 right-2 text-[#27AE60]"></i>}
                      <i className={`fas fa-user-graduate text-2xl mb-2 ${role === 'apprenant' ? 'text-[#27AE60]' : 'text-slate-300'}`}></i>
                      <span className={`block text-xs font-black ${role === 'apprenant' ? 'text-[#27AE60]' : 'text-slate-400'}`}>APPRENANT</span>
                    </div>

                    <div 
                      onClick={() => setRole('formateur')}
                      className={`relative cursor-pointer p-5 rounded-2xl border-4 transition-all duration-300 text-center ${role === 'formateur' ? 'border-[#ff9715] bg-orange-50 scale-105 shadow-md' : 'border-slate-100 bg-white opacity-40'}`}
                    >
                      {role === 'formateur' && <i className="fas fa-check-circle absolute top-2 right-2 text-[#ff9715]"></i>}
                      <i className={`fas fa-chalkboard-teacher text-2xl mb-2 ${role === 'formateur' ? 'text-[#ff9715]' : 'text-slate-300'}`}></i>
                      <span className={`block text-xs font-black ${role === 'formateur' ? 'text-[#ff9715]' : 'text-slate-400'}`}>FORMATEUR</span>
                    </div>
                  </div>
                  
                  <p className="text-center text-[10px] font-bold text-slate-500 italic mb-6 py-2 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    Mode sélectionné : <span className={`uppercase font-black ${role === 'apprenant' ? 'text-[#27AE60]' : 'text-[#ff9715]'}`}>{role}</span>
                  </p>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Nom Complet</label>
                    <input type="text" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#27AE60] focus:bg-white outline-none transition-all" placeholder="Jean Dupont" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Adresse Email</label>
                <input type="email" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#27AE60] focus:bg-white outline-none transition-all" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Mot de passe</label>
                  {activeTab === 'login' && <span className="text-[10px] font-bold text-[#ff9715] cursor-pointer hover:underline">Oublié ?</span>}
                </div>
                <input type="password" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-[#27AE60] focus:bg-white outline-none transition-all" placeholder="••••••••" />
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: activeTab === 'login' ? '#ff9715' : '#27AE60' }}
                className="w-full py-5 rounded-2xl text-white font-black text-sm tracking-[0.2em] shadow-lg transform hover:-translate-y-1 hover:brightness-110 active:scale-95 transition-all mt-8 flex items-center justify-center uppercase border-none"
              >
                {activeTab === 'login' ? 'Se Connecter' : 'Créer mon compte'}
                <i className="fas fa-arrow-right ml-3 text-xs"></i>
              </button>
            </form>

            {/* BOUTON GOOGLE RÉINSÉRÉ */}
            <div className="mt-8 text-center border-t border-slate-100 pt-8">
              <button className="w-full bg-white border-2 border-slate-100 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all font-black text-slate-600 text-[11px] uppercase tracking-widest shadow-sm">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
                Continuer avec Google
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Authentification;