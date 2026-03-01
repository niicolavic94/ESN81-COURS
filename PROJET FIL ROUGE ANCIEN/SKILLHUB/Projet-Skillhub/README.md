# 🎓 SkillHub

Une plateforme moderne de mise en relation entre formateurs et apprenants, facilitant l'accès à la formation et le partage de compétences.

![SkillHub Logo](./skillhub/public/LOGO-skillhub-removebg.png)

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Utilisation](#utilisation)
- [Base de données](#base-de-données)
- [Contribution](#contribution)
- [Licence](#licence)

## 🎯 À propos

SkillHub est une application web qui connecte les formateurs avec les apprenants. Elle permet de :
- Découvrir et s'inscrire à des formations
- Gérer son parcours d'apprentissage
- Proposer ses compétences en tant que formateur
- Organiser et suivre ses sessions de formation

## ✨ Fonctionnalités

### Pour les Apprenants
- 📚 Parcourir le catalogue de formations
- 📝 S'inscrire en tant qu'apprenant
- 📊 Accéder à un tableau de bord personnalisé
- 📅 Consulter le calendrier des formations
- 🔍 Voir les détails des formations

### Pour les Formateurs
- 👨‍🏫 S'inscrire en tant que formateur
- 📈 Gérer ses formations depuis un dashboard dédié
- 📅 Planifier ses sessions
- 👥 Suivre ses apprenants

### Fonctionnalités générales
- 🔐 Système d'authentification sécurisé
- 📱 Interface responsive et moderne
- 🎨 Design épuré avec Tailwind CSS
- ⚡ Performance optimale avec Vite

## 🛠 Technologies

### Frontend
- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navigation entre les pages

### Backend
- **SQL** - Base de données relationnelle

### Outils de développement
- **ESLint** - Linter pour maintenir la qualité du code
- **Git** - Contrôle de version

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Base de données SQL configurée

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/HUG0Prat/Projet-Skillhub.git
cd Projet-Skillhub/skillhub
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer la base de données**
```bash
# Importer le fichier SQL dans votre base de données
mysql -u votre_utilisateur -p votre_base < skillhub.sql
```

4. **Configurer l'environnement**
Créez un fichier `.env` à la racine du projet et ajoutez vos variables d'environnement :
```env
VITE_API_URL=votre_url_api
VITE_DB_HOST=localhost
VITE_DB_USER=votre_utilisateur
VITE_DB_PASSWORD=votre_mot_de_passe
```

5. **Lancer l'application en mode développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📁 Structure du projet

```
skillhub/
├── public/                  # Fichiers publics statiques
│   ├── CAMPUS3.jpg
│   ├── LOGO-skillhub-removebg.png
│   └── vite.svg
├── src/
│   ├── assets/             # Ressources (images, icônes)
│   │   └── react.svg
│   ├── components/         # Composants réutilisables
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── layouts/            # Layouts de l'application
│   │   └── MainLayout.jsx
│   ├── pages/              # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Autentification.jsx
│   │   ├── Formations.jsx
│   │   ├── FormationDetail.jsx
│   │   ├── DevenirApprenant.jsx
│   │   ├── DevenirFormateur.jsx
│   │   ├── ApprenantDashboard.jsx
│   │   ├── FormateurDashboard.jsx
│   │   ├── Dashboard.jsx
│   │   └── Calendrier.jsx
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── skillhub.sql            # Schema de la base de données
├── tailwind.config.js      # Configuration Tailwind
├── vite.config.js          # Configuration Vite
├── package.json            # Dépendances du projet
└── README.md               # Documentation
```

## 🚀 Utilisation

### Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Linter le code
npm run lint
```

### Navigation

- **/** - Page d'accueil
- **/authentification** - Connexion/Inscription
- **/formations** - Liste des formations disponibles
- **/formation/:id** - Détails d'une formation
- **/devenir-apprenant** - Inscription apprenant
- **/devenir-formateur** - Inscription formateur
- **/dashboard-apprenant** - Espace apprenant
- **/dashboard-formateur** - Espace formateur
- **/calendrier** - Planning des formations

## 💾 Base de données

Le fichier `skillhub.sql` contient le schéma complet de la base de données incluant :
- Tables des utilisateurs (apprenants et formateurs)
- Tables des formations
- Tables des inscriptions
- Relations et contraintes

Pour importer la base de données :
```bash
mysql -u username -p database_name < skillhub.sql
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence [LICENSE](LICENSE). Voir le fichier LICENSE pour plus de détails.

## 👥 Auteur

**Hugo Prat** - [@HUG0Prat](https://github.com/HUG0Prat)

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---
