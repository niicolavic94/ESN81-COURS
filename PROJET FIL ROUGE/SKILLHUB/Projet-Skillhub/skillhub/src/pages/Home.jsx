import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    
    <div className="animate-fade-in">
      {/* Section Hero */}
    <section className="bg-slate-900 text-white py-16 lg:py-24">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-[#2ecc71]">
        Bienvenue sur SKILLHUB
      </h2>
      <p className="text-lg lg:text-xl mb-10 opacity-90 leading-relaxed text-slate-300">
        Plateforme collaborative de formation professionnelle pour les passionnés de
        l'informatique et du numérique. Mettant en relation formateurs experts et apprenants motivés.
      </p>

      {/* Ajout d'une marge supérieure pour espacer les boutons du texte */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        {/* Bouton "Devenir formateur" avec fond orange */}
        <button
          onClick={() => navigate('/devenir-formateur')}
          className="bg-[#ff9715] hover:bg-[#e68613] text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg transform hover:-translate-y-1"
        >
          <i className="fas fa-user-graduate mr-2"></i>Devenir formateur
        </button>

        {/* Bouton "Devenir apprenant" avec fond vert */}
        <button
          onClick={() => navigate('/devenir-apprenant')}
          className="bg-[#27AE60] hover:bg-[#2ecc71] text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg transform hover:-translate-y-1"
        >
          <i className="fas fa-play-circle mr-2"></i>Devenir apprenant
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Section Nos Domaines d'Expertise (corrigée) */}
<section className="py-20 lg:py-32 bg-gray-50/50">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="max-w-3xl mx-auto text-center mb-20">
    
      <h3 className="text-3xl lg:text-5xl font-extrabold text-[#2C3E50] mb-6">Nos Domaines d'Expertise</h3>
  
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {[
        { id: "front", title: "Frontend", icon: "fa-code", color: "text-indigo-600", bg: "bg-indigo-100" },
        { id: "back", title: "Backend", icon: "fa-database", color: "text-emerald-600", bg: "bg-emerald-100" },
        { id: "reseau", title: "Réseau", icon: "fa-network-wired", color: "text-blue-600", bg: "bg-blue-100" },
        { id: "cyber", title: "Cyber", icon: "fa-shield-alt", color: "text-purple-600", bg: "bg-purple-100" },
      ].map((item) => (
        <div key={item.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
          
          {/* L'icône avec un cercle coloré bien visible */}
          <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-6 shadow-inner transition-transform group-hover:scale-110`}>
            {/* Assure-toi que la classe Font Awesome est correcte (ex: fas, fab, far) */}
            <i className={`fas ${item.icon} text-3xl`}></i>
          </div>

          <h4 className="text-xl font-bold text-[#2C3E50] mb-3">{item.title}</h4>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">Description courte et efficace de l'expertise proposée.</p>
          
          <button onClick={() => navigate('/formations')} className="mt-auto font-bold text-xs tracking-wider text-[#E67E22] uppercase hover:underline">
            Découvrir →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Section Chiffres SkillHub */}

  <section className="py-20 lg:py-28 bg-[#e9f7ef] relative overflow-hidden">
  {/* Décorations pour donner de la profondeur au vert */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#27AE60]/10 rounded-full blur-3xl"></div>
  <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#27AE60]/5 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-6 lg:px-12 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* CÔTÉ GAUCHE : TEXTE & STATS */}
      <div className="relative">
        <div className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.2em] uppercase bg-[#27AE60] text-white rounded-lg shadow-lg shadow-green-900/10">
          SKILLHUB
        </div>
      
        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
          Notre mission est de faciliter l'accès à la formation professionnelle à <span className="font-bold text-[#2C3E50]">Castres</span>. 
          Rejoignez une communauté de plus de 100 apprenants qui ont sauté le pas.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#27AE60]">
            <div className="text-4xl font-black text-[#27AE60] mb-1">100+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Apprenants</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#ff9715]">
            <div className="text-4xl font-black text-[#ff9715] mb-1">15</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Experts</div>
          </div>
        </div>

        <button
          onClick={() => navigate('/calendrier')}
          className="group bg-[#2C3E50] hover:bg-black text-orange font-black text-xs uppercase tracking-[0.2em] py-5 px-10 rounded-2xl transition-all shadow-xl flex items-center"
        >
          <i className="fas fa-calendar-alt mr-3 opacity-60 group-hover:rotate-12 transition-transform"></i>
          Voir le calendrier
        </button>
      </div>

      {/* CÔTÉ DROIT : FORMATIONS POPULAIRES */}
      <div className="relative">
        <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl shadow-green-900/10 border border-white">
          <h3 className="text-2xl font-black text-[#2C3E50] mb-8 text-center lg:text-left uppercase tracking-tighter">
            Formations <span className="text-[#27AE60]">Populaires</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { id: 'cyber', title: 'Sécurité Informatique', sub: 'Formation certifiante', icon: 'fa-shield-alt', color: 'bg-slate-900' },
              { id: 'reseau', title: 'Administration Réseaux', sub: 'Infrastructure & Cloud', icon: 'fa-server', color: 'bg-slate-900' }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('/formations')}
                className="group flex items-center p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-[#27AE60]/20 hover:bg-white hover:shadow-xl transition-all cursor-pointer"
              >
                <div className={`${item.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mr-5 transition-all group-hover:scale-110 group-hover:bg-[#27AE60] shadow-lg`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#2C3E50] text-sm group-hover:text-[#27AE60] transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.sub}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-300 group-hover:text-[#27AE60] group-hover:bg-green-50 transition-all">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-[10px] font-bold text-black uppercase tracking-widest">
            +12 autres formations disponibles
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
