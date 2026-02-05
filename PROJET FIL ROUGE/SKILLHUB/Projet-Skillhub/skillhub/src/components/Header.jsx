import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center py-5 lg:py-6">
          
          {/* Logo - Redirige vers l'accueil */}
          <Link to="/" className="flex items-center space-x-3 mb-4 lg:mb-0">
            <div className="bg-white p-2 rounded-xl">
              <img src="/LOGO-skillhub-removebg.png" alt="Logo" className="w-14 h-14 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                <span className="text-[#2C3E50]">Skill</span>
                <span className="text-[#ff9715]">Hub</span>
              </h1>
              <p className="text-xs text-slate-400">Apprendre. Grandir. Réussir.</p>
            </div>
          </Link>

          {/* Navigation Dynamique */}
          <nav className="mb-4 lg:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {/* On n'affiche ces ancres que si on est sur la page d'accueil */}
              {location.pathname === '/' ? (
                <>
                  <li><a href="#front" className="text-[#2C3E50] font-semibold hover:text-[#ff9715] transition-colors">FRONT</a></li>
                  <li><a href="#back" className="text-[#2C3E50] font-semibold hover:text-[#ff9715] transition-colors">BACK</a></li>
                  <li><a href="#cyber" className="text-[#2C3E50] font-semibold hover:text-[#ff9715] transition-colors">CYBER</a></li>
                  <li><a href="#reseau" className="text-[#2C3E50] font-semibold hover:text-[#ff9715] transition-colors">RESEAU</a></li>
                </>
              ) : (
                <>
                  {/* Sur les autres pages, on affiche des liens vers le catalogue ou l'accueil */}
                  <li><Link to="/" className="text-[#2C3E50] font-semibold hover:text-[#ff9715]">ACCUEIL</Link></li>
                  <li><Link to="/calendrier" className="text-[#2C3E50] font-semibold hover:text-[#ff9715]">CALENDRIER</Link></li>
                </>
              )}
            </ul>
          </nav>

          {/* Actions (Recherche & Connexion) */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 pl-4 pr-10 flex items-center pointer-events-none">
                <i className="fas fa-search text-slate-400"></i>
              </div>
              <input 
                type="text" 
                placeholder="Recherche..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff9715] w-48 lg:w-64"
              />
            </div>
            
            <Link 
              to="/auth" 
              className="bg-[#ff9715] hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-md hover:shadow-lg flex items-center"
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              Connexion
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;