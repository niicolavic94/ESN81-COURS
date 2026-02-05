import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DevenirFormateur = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Quel statut dois-je avoir ?", a: "Vous pouvez être indépendant (Auto-entrepreneur), salarié d'une autre structure avec une convention de mise à disposition, ou nous pouvons discuter d'un contrat de vacation." },
    { q: "Dois-je fournir mon propre matériel ?", a: "Non, SkillHub fournit les salles équipées, les vidéoprojecteurs et les supports de cours si nécessaire. Vous n'avez besoin que de votre expertise !" },
    { q: "Comment suis-je rémunéré ?", a: "La rémunération se fait à la vacation ou sur facture selon votre statut, avec des tarifs compétitifs basés sur votre expertise." }
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Section Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-200 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Devenez formateur <span className="text-[#27AE60]">SkillHub</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Rejoignez notre équipe de formateurs et animez des sessions <strong>en présentiel</strong> dans nos locaux à Castres. 
          </p>
          <Link 
            to="/auth" 
            className="inline-block bg-[#27AE60] hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fas fa-paper-plane mr-2"></i>Devenir formateur
          </Link>
        </div>
      </section>

      {/* Section Processus (Timeline) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2C3E50] text-center mb-16">
            Un parcours simple pour nous rejoindre
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Ligne de connexion (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            
            {[
              { step: "01", title: "Inscription", desc: "Envoyez votre CV et vos domaines d'intervention via notre portail.", icon: "fa-file-signature" },
              { step: "02", title: "Validation", desc: "Échangeons sur votre pédagogie et vos projets de formation.", icon: "fa-comments" },
              { step: "03", title: "Immersion", desc: "Planifiez votre première session et rencontrez vos apprenants.", icon: "fa-graduation-cap" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-50 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#27AE60] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4 mb-4 text-[#27AE60]">
                  <i className={`fas ${item.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2C3E50] text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-[#2C3E50]">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'} text-[#27AE60]`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-slate-600 border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Lieux (Castres) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Un environnement de travail premium à Castres</h2>
              <p className="text-slate-600 mb-8">
                Parce qu'un formateur épanoui transmet mieux son savoir, nous mettons à votre disposition le meilleur de la technologie pédagogique au cœur du Tarn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <i className="fas fa-wifi text-[#ff9715]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Fibre Très Haut Débit</h4>
                    <p className="text-xs text-slate-500">Idéal pour les démos en direct.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <i className="fas fa-coffee text-[#ff9715]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Espace Lounge</h4>
                    <p className="text-xs text-slate-500">Café et thé à volonté.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               {/* Ici vous pouvez mettre vos photos réelles */}
               <div className="h-48 bg-slate-200 rounded-2xl shadow-inner flex items-center justify-center">
                 <i className="fas fa-image text-slate-400 text-3xl"></i>
               </div>
               <div className="h-48 bg-slate-300 rounded-2xl shadow-inner flex items-center justify-center">
                 <i className="fas fa-image text-slate-400 text-3xl"></i>
               </div>
               <div className="h-48 bg-[#2C3E50] rounded-2xl flex items-center justify-center text-white p-4 text-center text-sm font-bold">
                 Inauguré en 2025
               </div>
               <div className="h-48 bg-[#ff9715] rounded-2xl flex items-center justify-center text-white p-4 text-center text-sm font-bold">
                 +20 Formateurs partenaires
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevenirFormateur;