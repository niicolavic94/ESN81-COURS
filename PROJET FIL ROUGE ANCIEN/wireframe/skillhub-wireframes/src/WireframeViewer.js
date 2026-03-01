import React, { useState } from 'react';
import { 
  Home, Users, BookOpen, Calendar, BarChart3, Search, Filter, 
  Plus, Check, X, Eye, Edit, Trash2, Clock, MapPin, User, Star, ChevronLeft, ChevronRight 
} from 'lucide-react';

/**
 * COMPOSANTS UTILITAIRES POUR LES WIREFRAMES
 */
const Wireframe = ({ children, title }) => (
  <div className="card shadow-lg border-0">
    <div className="card-header bg-dark text-white py-3">
      <h4 className="mb-0 fs-5">{title}</h4>
    </div>
    <div className="card-body bg-white">
      {children}
    </div>
  </div>
);

const Box = ({ children, className = "", dashed = false, style = {} }) => (
  <div 
    className={`border ${dashed ? 'border-dashed' : 'border-1'} rounded p-3 ${className}`}
    style={{ borderStyle: dashed ? 'dashed' : 'solid', ...style }}
  >
    {children}
  </div>
);

const WireframeViewer = () => {
  const [activeSpace, setActiveSpace] = useState('public');
  const [activePage, setActivePage] = useState('home');

  // Configuration des espaces et pages
  const spaces = {
    public: { name: 'Espace Public', pages: ['home', 'catalogue', 'detail'] },
    admin: { name: 'Espace Admin', pages: ['dashboard', 'users', 'validation', 'planning'] },
    formateur: { name: 'Espace Formateur', pages: ['dashboard', 'formations', 'presence'] },
    apprenant: { name: 'Espace Apprenant', pages: ['dashboard', 'catalogue', 'inscriptions', 'evaluation'] }
  };

  const pageNames = {
    home: 'Accueil', catalogue: 'Catalogue', detail: 'Détails',
    dashboard: 'Tableau de bord', users: 'Utilisateurs', validation: 'Validation',
    planning: 'Planning', formations: 'Mes Formations', presence: 'Présences',
    inscriptions: 'Mes Inscriptions', evaluation: 'Évaluation'
  };

  // --- RENDU : ESPACE PUBLIC ---
  const renderPublicHome = () => (
    <Wireframe title="Accueil - SkillHub">
      <Box className="mb-4 text-center p-5 bg-light" style={{minHeight: '200px'}}>
        <h2 className="display-6 fw-bold">Apprendre & Transmettre</h2>
        <p className="lead">La plateforme d'échange de compétences.</p>
        <button className="btn btn-primary mt-3">Découvrir le catalogue</button>
      </Box>
      <div className="row g-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="col-md-4">
            <Box dashed className="h-100 text-center">
              <div className="bg-secondary bg-opacity-10 rounded mb-2" style={{height: '100px'}}></div>
              <h6>Formation Vedette {i}</h6>
              <small className="text-muted">Catégorie • Expert</small>
            </Box>
          </div>
        ))}
      </div>
    </Wireframe>
  );

  const renderPublicCatalogue = () => (
    <Wireframe title="Catalogue des Formations">
      <div className="d-flex gap-2 mb-4">
        <div className="input-group">
          <span className="input-group-text"><Search size={18}/></span>
          <input type="text" className="form-control" placeholder="Rechercher..." />
        </div>
        <button className="btn btn-outline-secondary"><Filter size={18}/></button>
      </div>
      <div className="vstack gap-3">
        {[1, 2, 3].map(i => (
          <Box key={i} className="bg-light">
            <div className="row align-items-center">
              <div className="col-md-3"><div className="bg-secondary rounded w-100" style={{height: '80px'}}></div></div>
              <div className="col-md-7">
                <h5 className="mb-1">Titre Formation {i}</h5>
                <p className="small text-muted mb-0">Par Formateur Nom • 12 Ateliers</p>
              </div>
              <div className="col-md-2 text-end"><button className="btn btn-sm btn-primary">Détails</button></div>
            </div>
          </Box>
        ))}
      </div>
    </Wireframe>
  );

  // --- RENDU : ESPACE ADMIN ---
  const renderAdminDashboard = () => (
    <Wireframe title="Dashboard Administrateur">
      <div className="row g-3 mb-4">
        {[['Apprenants', '156', 'blue'], ['Formateurs', '23', 'green'], ['Attente', '5', 'orange']].map(([label, val, col]) => (
          <div key={label} className="col-md-4">
            <Box className={`text-center border-${col}`}>
              <h2 className={`fw-bold text-${col}`}>{val}</h2>
              <small className="text-muted">{label}</small>
            </Box>
          </div>
        ))}
      </div>
      <Box dashed><h6 className="fw-bold mb-3">Dernières Activités</h6><div className="vstack gap-2 small">
        <div className="p-2 border-bottom">Nouvel utilisateur inscrit</div>
        <div className="p-2">Formation "React" validée</div>
      </div></Box>
    </Wireframe>
  );

  const renderAdminPlanning = () => (
    <Wireframe title="Planning des Salles">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="btn-group btn-group-sm">
          <button className="btn btn-outline-secondary"><ChevronLeft size={16}/></button>
          <button className="btn btn-outline-secondary"><ChevronRight size={16}/></button>
        </div>
        <span className="fw-bold">Janvier 2025</span>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered small">
          <thead><tr className="table-light"><th>Salle</th><th>Lun</th><th>Mar</th><th>Mer</th></tr></thead>
          <tbody>
            {['A101', 'B202'].map(s => (
              <tr key={s}><td>{s}</td><td className="bg-primary bg-opacity-10">Atelier X</td><td></td><td></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wireframe>
  );

  // --- RENDU : ESPACE FORMATEUR ---
  const renderFormateurPresence = () => (
    <Wireframe title="Feuille de Présence">
      <div className="alert alert-info py-2 small">Atelier : Initiation JS • 15/01/2025</div>
      <div className="table-responsive">
        <table className="table table-sm">
          <thead><tr><th>Nom</th><th>Présent</th><th>Note</th></tr></thead>
          <tbody>
            {[1, 2, 3].map(i => (
              <tr key={i}>
                <td>Apprenant {i}</td>
                <td><input type="checkbox" className="form-check-input" /></td>
                <td><input type="text" className="form-control form-control-sm" placeholder="RàS" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-success btn-sm w-100 mt-2">Valider la présence</button>
    </Wireframe>
  );

  // --- RENDU : ESPACE APPRENANT ---
  const renderApprenantEvaluation = () => (
    <Wireframe title="Évaluer l'atelier">
      <div className="mb-4">
        <label className="form-label fw-bold small">Note globale</label>
        <div className="d-flex gap-2 text-warning">
          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={24} fill={s <= 4 ? "currentColor" : "none"} />)}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold small">Commentaires</label>
        <textarea className="form-control" rows="3" placeholder="Votre avis..."></textarea>
      </div>
      <button className="btn btn-primary w-100">Envoyer l'évaluation</button>
    </Wireframe>
  );

  // MAPPING FINAL DES PAGES
  const pages = {
    public: { home: renderPublicHome, catalogue: renderPublicCatalogue, detail: () => <Wireframe title="Détails Formation">Contenu détails...</Wireframe> },
    admin: { dashboard: renderAdminDashboard, users: () => <Wireframe title="Gestion Utilisateurs">Liste des membres...</Wireframe>, validation: () => <Wireframe title="Validation">Flux de validation...</Wireframe>, planning: renderAdminPlanning },
    formateur: { dashboard: renderAdminDashboard, formations: () => <Wireframe title="Mes Formations">Liste mes cours...</Wireframe>, presence: renderFormateurPresence },
    apprenant: { dashboard: renderAdminDashboard, catalogue: renderPublicCatalogue, inscriptions: () => <Wireframe title="Mes Inscriptions">Mes ateliers suivis...</Wireframe>, evaluation: renderApprenantEvaluation }
  };

  return (
    <div className="container-fluid min-vh-100 bg-light py-4">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          
          {/* HEADER DE NAVIGATION */}
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h1 className="h4 fw-bold mb-3 border-bottom pb-2">SkillHub Wireframe Preview</h1>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {Object.entries(spaces).map(([key, space]) => (
                  <button 
                    key={key} 
                    onClick={() => { setActiveSpace(key); setActivePage(spaces[key].pages[0]); }}
                    className={`btn btn-sm ${activeSpace === key ? 'btn-dark' : 'btn-outline-dark'}`}
                  >
                    {space.name}
                  </button>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2">
                {spaces[activeSpace].pages.map(p => (
                  <button 
                    key={p} 
                    onClick={() => setActivePage(p)}
                    className={`btn btn-sm ${activePage === p ? 'btn-primary' : 'btn-outline-primary text-capitalize'}`}
                  >
                    {pageNames[p] || p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ZONE D'AFFICHAGE */}
          <div className="wireframe-container">
            {pages[activeSpace][activePage] ? pages[activeSpace][activePage]() : <div className="alert alert-secondary">Page non définie.</div>}
          </div>

          <p className="text-center mt-4 text-muted small">
            Mode : Basse Fidélité (Wireframe) • Projet SkillHub 2025
          </p>

        </div>
      </div>
    </div>
  );
};

export default WireframeViewer;