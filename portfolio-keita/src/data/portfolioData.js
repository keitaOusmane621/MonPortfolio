export const portfolioData = {
  personalInfo: {
    name: "Keita Ousmane",
    title: "Développeur Full Stack",
    location: "Guinée-Conakry",
    email: "keitakadiatouousmane@gmail.com",
    phone: "+224 621 51 98 97",
    description: "Développeur passionné full stack, créant des applications web modernes et performantes."
  },

  skills: {
    frontend: [
      { name: "HTML/CSS", percentage: 85 },
      { name: "JavaScript", percentage: 75 },
      { name: "React", percentage: 65 }
    ],
    backend: [
      { name: "Node.js", percentage: 70 },
      { name: "Express", percentage: 75 },
      { name: "REST API", percentage: 65 },
      { name: "MySQL", percentage: 90 },
      { name: "SQL", percentage: 85 },
      { name: "MongoDB", percentage: 85 },
      { name: "SQL Server", percentage: 65 },
      { name: "Python", percentage: 30 }
    ],
    desktop: [
      { name: "WinDev", percentage: 65 },
      { name: "WinDev Mobile", percentage:50 }
    ],
    design: [
      { name: "Figma", percentage: 80 },
      { name: "Canva", percentage: 85 }
    ],
    tools: [
      { name: "Git", percentage: 85 },
      { name: "GitHub", percentage: 85 },
      { name: "VS Code", percentage: 90 },
      { name: "Postman", percentage: 80 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Application de Gestion des Tâches",
      description: "Application complète de gestion de tâches avec fonctionnalités avancées",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Terminé"
    },
    {
      id: 2,
      title: "Plateforme de Suivi des Demandes de Stage",
      description: "Système de gestion des demandes de stage pour établissements éducatifs",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "En cours"
    },
    {
      id: 3,
      title: "Application E-commerce",
      description: "Plateforme de vente en ligne avec panier et paiement",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Terminé"
    },
    {
      id: 4,
      title: "Gestion de Bibliothèque",
      description: "Système de gestion complet pour bibliothèques",
      technologies: ["React", "Express", "MySQL"],
      status: "Terminé"
    },
    {
      id: 5,
      title: "Gestion d'École",
      description: "Application de gestion scolaire développée en WinDev",
      technologies: ["WinDev", "WinDev Mobile"],
      status: "Terminé"
    },
    {
      id: 6,
      title: "Plateforme de Blog",
      description: "Site de blog avec système de commentaires",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "En cours"
    },
    {
      id: 7,
      title: "Application Météo",
      description: "Application de prévisions météorologiques",
      technologies: ["React", "API REST"],
      status: "En validation"
    }
  ],

  socialLinks: {
    linkedin: "https://linkedin.com/in/Ousmane Keita",
    telegram: "https://t.me/votre-username",
    instagram: "https://instagram.com/votre-username",
    whatsapp: "https://wa.me/224621519897"
  }
};