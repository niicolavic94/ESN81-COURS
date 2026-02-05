import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DevenirApprenant = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Quels sont les prérequis pour m'inscrire ?", a: "Chaque formation a ses propres prérequis techniques. Cependant, la motivation et la curiosité sont les critères principaux. Un test de positionnement peut être effectué avant l'entrée en formation." },
    { q: "Quelles sont les aides au financement ?", a: "Nos formations peuvent être financées via votre CPF, l'OPCO de votre entreprise ou via des dispositifs Pôle Emploi. Contactez-nous pour monter votre dossier." },
    { q: "Est-ce que les cours sont uniquement en présentiel ?", a: "Oui, chez SkillHub Castres, nous privilégions le présentiel pour favoriser l'entraide et l'apprentissage par la pratique avec nos experts." }
  ];

  return (
    <div className="bg-white animate-fade-in">
      {/* Section Hero */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Lancez votre carrière avec <span className="text-[#ff9715]">SkillHub</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Apprenez un nouveau métier ou montez en compétences grâce à nos experts. 
            Des formations <strong>concrètes et immersives</strong> dans nos locaux à Castres.
          </p>
          <Link 
            to="/formations" 
            className="inline-block bg-[#ff9715] hover:bg-orange-600 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fas fa-search mr-2"></i>Voir le catalogue
          </Link>
        </div>
      </section>

      {/* Section Processus (Timeline) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2C3E50] text-center mb-16">
            Votre parcours d'apprentissage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            
            {[
                 { step: "01", title: "Inscription", desc: "Créer votre compte", icon: "fa-user-plus" },
              { step: "02", title: "Validation", desc: "Validation auprès de l'administration.", icon: "fa-list-ul" },
             
              { step: "03", title: "Inscription aux cours", desc: "Suivez vos cours au sein de l'établissement", icon: "fa-award" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-50 text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#ff9715] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4 mb-4 text-[#ff9715]">
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
            Réponses à vos questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-[#2C3E50]">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'} text-[#ff9715]`}></i>
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

      {/* Section Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Pourquoi choisir SkillHub Castres ?</h2>
              <p className="text-slate-600 mb-8">
                Nous ne nous contentons pas de vous donner des cours. Nous vous offrons un environnement propice à la réussite et au networking local.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <i className="fas fa-rocket text-[#27AE60]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Pédagogie Active</h4>
                    <p className="text-xs text-slate-500">Apprentissage par la pratique immédiate.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <i className="fas fa-users text-[#27AE60]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Promotion à taille humaine</h4>
                    <p className="text-xs text-slate-500">Suivi personnalisé pour chaque élève.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-48 bg-[#2C3E50] rounded-2xl flex items-center justify-center text-white p-4 text-center text-sm font-bold shadow-lg">
                Diplômes reconnus par l'État
              </div>
              <div className="h-48 bg-slate-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
                <i className="fas fa-graduation-cap text-slate-400 text-4xl"></i>
              </div>
              <div className="h-48 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
                <i className="fas fa-laptop-code text-slate-400 text-4xl"></i>
              </div>
              <div className="h-48 bg-[#ff9715] rounded-2xl flex items-center justify-center text-white p-4 text-center text-sm font-bold shadow-lg">
                95% de satisfaction stagiaire
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#2C3E50] text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Prêt à changer de dimension ?</h3>
        <Link to="/auth" className="bg-[#27AE60] hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all">
          Créer mon compte apprenant
        </Link>
      </section>
    </div>
  );
};

export default DevenirApprenant;