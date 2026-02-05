import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-700 pb-10">
          
          {/* Colonne 1 : À propos */}
          <div>
            <div className="flex items-center mb-6">
            <img src="/LOGO-skillhub-removebg.png" alt="Logo" className="w-14 h-14 object-contain" />
              <h3 className="text-2xl font-bold">
                <span className="text-white">Skill</span>
                <span className="text-[#ff9715]">Hub</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Plateforme de formation professionnelle à Castres. 
              Nous accompagnons les talents de demain dans la maîtrise des technologies numériques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-[#ff9715] text-white p-3 rounded-full transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="bg-slate-800 hover:bg-[#ff9715] text-white p-3 rounded-full transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Contact Castres */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-[#27AE60]">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-envelope text-[#ff9715] mt-1 mr-4"></i>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-slate-400 text-sm">contact@skillhub.fr</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-location-dot text-[#ff9715] mt-1 mr-4"></i>
                <div>
                  <p className="font-semibold text-sm">Siège Castres</p>
                  <p className="text-slate-400 text-sm italic">57 Rue Firmin Oulès, 81100 Castres</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-[#ff9715] mt-1 mr-4"></i>
                <div>
                  <p className="font-semibold text-sm">Horaires</p>
                  <p className="text-slate-400 text-sm">Lun - Ven: 8h30 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 3 : Newsletter & Liens */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-[#27AE60]">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400 mb-6">
              <li><Link to="/" className="hover:text-[#ff9715] transition-colors">Accueil</Link></li>
              <li><Link to="/formations" className="hover:text-[#ff9715] transition-colors">Catalogue des formations</Link></li>
              <li><Link to="/calendrier" className="hover:text-[#ff9715] transition-colors">Sessions présentiel</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-[#ff9715] transition-colors">Mentions légales</Link></li>
            </ul>
            <div className="pt-4">
              <p className="text-xs text-slate-500 italic">Certifié Qualiopi pour l'excellence de nos formations.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-slate-500 text-xs">
            © 2026 SkillHub — Tous droits réservés. <br className="md:hidden" />
            Développé avec passion pour la région Occitanie.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;