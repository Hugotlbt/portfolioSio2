// Gestion du thème sombre
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Vérifie si un thème est sauvegardé dans le localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

// Fonction pour basculer le thème
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Change l'icône
    if (newTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Écoute le clic sur le bouton de thème
themeToggle.addEventListener('click', toggleTheme);

// Initialisation des animations AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Navigation responsive
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Smooth scroll pour les liens de navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});

// Animation du header au scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let scrollTimer = null;

function handleScroll() {
    const currentScroll = window.pageYOffset;
    const scrollDelta = Math.abs(currentScroll - lastScroll);
    
    // Ne réagir qu'aux changements significatifs de scroll
    if (scrollDelta < 10) {
        return;
    }

    // Toujours visible en haut de la page
    if (currentScroll <= 50) {
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
        lastScroll = currentScroll;
        return;
    }

    // Gestion du scroll vers le bas/haut
    if (currentScroll > lastScroll) {
        // Scroll vers le bas
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    } else {
        // Scroll vers le haut
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }
    
    lastScroll = currentScroll;
}

// Utilisation d'un debounce pour optimiser les performances
window.addEventListener('scroll', () => {
    if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(handleScroll, 10);
}, false);

// Définition des projets
const projects = {
    sanctions: {
        title: "Sanctions",
        description: "Application web de gestion des sanctions pour les établissements scolaires. Cette application permet aux établissements de suivre et gérer efficacement les sanctions disciplinaires.",
        technologies: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
        features: [
            "Gestion des sanctions et des élèves",
            "Interface d'administration",
            "Importation d'éléves en CSV",
            "Création de promotion etudiantes",
            "Gestion de la connexion / deconnexion ainsi que l'inscription d'un utilisateur"
        ],
        images: [
            "assets/SanctionCover.jpg",
            "assets/sanctionSeConnecter.jpg",
            "assets/sanctionCreeCompte.jpg",
            "assets/sanctionCSV.jpg",
            "assets/sanctionCreationPromo.jpg"
        ],
        link: "https://example.com/sanctions",
        github: "https://github.com/username/sanctions"
    },
    digitalloops: {
        title: "Digital Loops",
        description: "Site vitrine professionnel pour un editeur de logiciel spécialiser dans l'audio, permettant la vente et le téléchargement de plugins (VST).",
        technologies: ["PHP", "MySQL", "HTML/CSS"],
        features: [
            "Catalogue de produits (VST)",
            "Categorie equipe presentant les differents employés",
            "Panier fonctionnel",
            "Possibilité de créer des devis"
        ],
        images: [
            "assets/DigitalLoopCover.jpg",
            "assets/DigitalLoopsProduits.jpg",
            "assets/DigitalLoopsPanier.jpg",
            "assets/DigitalLoopOffre.jpg",
            "assets/DigitalLoopsEquipe.jpg"
        ],
        link: "https://example.com/digitalloops",
        github: "https://github.com/username/digitalloops"
    },
    espaces: {
        title: "Espaces",
        description: "Application Web de gestion de cinémathèque personnelle utilisant l'API TMDB pour fournir des informations détaillées sur les films.",
        technologies: ["Electron", "JS", "MySQL", "Bootstrap", "HTML/CSS"],
        features: [
            "Recherche de films avec autocomplétion",
            "Gestion de listes personnalisées",
            "Recommandations basées sur les préférences",
            "Intégration des notes et critiques"
        ],
        images: [
            "assets/EspaceCover.jpg",
            "assets/EspaceConnexion.jpg",
            "assets/EspaceInscription.jpg"
        ],
        link: "https://example.com/bestmovie",
        github: "https://github.com/username/bestmovie"
    },
    musicmailer: {
        title: "Music Mailer",
        description: "Plugin WordPress développé pour Client Roi permettant la gestion et l'affichage des commerces par ordre alphabétique avec une navigation intuitive.",
        technologies: ["Python FLASK", "HTML/CSS", "MongoDB", "Bootstrap"],
        features: [
            "Navigation alphabétique des commerces",
            "Filtrage dynamique des résultats",
            "Intégration transparente avec WordPress",
            "Interface d'administration personnalisée"
        ],
        images: [
            "assets/musicMailerCover.jpg",
            "assets/musicMailerContact.jpg",
            "assets/musicMailerAjoutContact.jpg",
            "assets/musicMailerClick.jpg",
            "assets/musicMailerEnvoi.jpg",
            "assets/musicMailerSupp.jpg",
        ],
        link: "https://example.com/plugin-abecedaire",
        github: "https://github.com/username/plugin-abecedaire"
    },
    aurastudio: {
        title: "Aura Studio",
        description: "création d'un site internet vitrine visant à développer un projet de maison d'édition appartenant au studio d'enregistrement Aura Studio, dans le but de présenter chaque compositeur signé dans la maison.",
        technologies: ["Figma", "Webflow", "JS"],
        features: [
            "Renvoi vers le profil de chaque artistes",
            "Renvoi vers la marketplace de la maison d'édition",
            "Presentation épuré et moderne",
            "Galerie photos et actualités"
        ],
        images: [
            "assets/auraStudioCover.jpg",
            "assets/auraStudioIntro.jpg",
            "assets/auraStudioArtiste.jpg",
            "assets/auraStudioArtisteZoom.jpg",
            "assets/auraStudioPhoto.jpg"
        ],
        link: "https://example.com/assoboxe",
        github: "https://github.com/username/assoboxe"
    },
    cinenote: {
        title: "CineNote",
        description: "Creation d'un site web permettant de mettre des avis et des commentaires sur des films que l'on peux importer.",
        technologies: ["HTML/CSS", "PHP", "Bootstrap", "MySQL"],
        features: [
            "Galerie de films interactive (details)",
            "Gestion de la connexion / deconnexion ainsi que l'inscription d'un utilisateur",
            "Système d'avis et notations de film",
            "Importation dans la base de données de film"
        ],
        images: [
            "assets/cineNoteCover.jpg",
            "assets/cineNoteListFilm.jpg",
            "assets/cineNoteInscription.jpg",
            "assets/cineNoteConnexion.jpg",
            "assets/cineNoteGestionErreur.jpg"
        ],
        link: "https://example.com/page-detail-commerce",
        github: "https://github.com/username/page-detail-commerce"
    }
};

// Fonction pour afficher les projets
function displayProjects() {
    console.log('Displaying projects...');
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid not found!');
        return;
    }
    
    // Vider la grille existante
    projectsGrid.innerHTML = '';
    
    console.log('Available projects:', Object.keys(projects));
    Object.entries(projects).forEach(([key, project]) => {
        console.log('Creating card for project:', key);
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.images[0]}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-excerpt">${project.description.substring(0, 100)}...</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
                </div>
                <button class="btn btn-outline-primary project-link" data-project-key="${key}" data-project-title="${project.title}">Détails</button>
            </div>
        `;
        
        const projectLink = projectCard.querySelector('.project-link');
        projectLink.addEventListener('click', (e) => {
            e.preventDefault();
            const key = e.target.dataset.projectKey;
            console.log('Project clicked:', { key });
            openProjectModal(key);
        });
        
        projectsGrid.appendChild(projectCard);
    });
}



// Fonction pour convertir un titre en clé
function titleToKey(title) {
    console.log('Converting title to key:', title);
    const key = title.toLowerCase()
        .replace(/[\u00e0-\u00ff]/g, c => {
            // Remplacer les caractères accentués
            return 'aaaaaeeeeiiiiooooouuuunc'.charAt('àáâãäèéêëìíîïòóôõöùúûüñç'.indexOf(c));
        })
        .replace(/\s+/g, '') // Supprimer les espaces
        .replace(/[^a-z0-9]/g, ''); // Ne garder que les caractères alphanumériques
    console.log('Generated key:', key);
    return key;
}

// Fonction pour l'effet tilt sur les cartes de compétences
function initTiltEffect() {
    const cards = document.querySelectorAll('.skill-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

let tiltTimeout;

function handleTilt(e) {
    if (tiltTimeout) {
        cancelAnimationFrame(tiltTimeout);
    }

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Mettre à jour la position des éléments internes pour un effet de profondeur
    const elements = card.querySelectorAll('.skill-icon, .skill-title, .skill-list');
    elements.forEach(el => {
        el.style.transform = `translateZ(${20 + Math.abs(rotateX + rotateY)}px)`;
    });
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = '';
    
    // Réinitialiser la position des éléments internes
    const elements = card.querySelectorAll('.skill-icon, .skill-title, .skill-list');
    elements.forEach(el => {
        el.style.transform = '';
    });
}

// Initialisation des gestionnaires d'événements pour les projets
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectCard = link.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            const projectKey = titleToKey(projectTitle);
            openProjectModal(projectKey);
        });
    });
});

// Fonction pour ouvrir la modale de projet
function openProjectModal(projectKey) {
    console.log('Opening modal for project:', projectKey);
    const project = projects[projectKey];
    if (!project) {
        console.error(`Project not found for key: ${projectKey}`);
        console.log('Available projects:', Object.keys(projects));
        return;
    }

    const modal = document.getElementById('projectModal');
    
    // Mise à jour du contenu de la modale
    modal.querySelector('.project-title').textContent = project.title;
    modal.querySelector('.project-description').textContent = project.description;
    
    // Mise à jour de l'image principale
    const mainImage = modal.querySelector('.project-main-image');
    mainImage.src = project.images[0];
    mainImage.alt = project.title;
    
    // Génération des miniatures
    const thumbnailsContainer = modal.querySelector('.project-thumbnails');
    thumbnailsContainer.innerHTML = project.images.map((img, index) => `
        <div class="thumbnail-item ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${projectKey}', ${index})">
            <img src="${img}" alt="Miniature ${index + 1}">
        </div>
    `).join('');
    
    // Mise à jour des technologies
    const techTags = modal.querySelector('.tech-tags');
    techTags.innerHTML = project.technologies.map(tech =>
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Mise à jour des fonctionnalités
    const featuresList = modal.querySelector('.features-list');
    featuresList.innerHTML = project.features.map(feature =>
        `<li>${feature}</li>`
    ).join('');
    
    // Mise à jour des liens
    modal.querySelector('.project-link').href = project.link;
    modal.querySelector('.project-github').href = project.github;
    
    // Ouverture de la modale
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Fonction pour changer l'image principale
function changeMainImage(projectKey, imageIndex) {
    const project = projects[projectKey];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const mainImage = modal.querySelector('.project-main-image');
    const thumbnails = modal.querySelectorAll('.thumbnail-item');
    
    mainImage.src = project.images[imageIndex];
    thumbnails.forEach((thumb, index) => {
        if (index === imageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}



// Gestion des onglets de certification
function initCertificationTabs() {
    const tabButtons = document.querySelectorAll('.cert-tab-btn');
    const tabContents = document.querySelectorAll('.cert-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retire la classe active de tous les boutons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Ajoute la classe active au bouton cliqué
            button.classList.add('active');

            // Cache tous les contenus
            tabContents.forEach(content => content.classList.remove('active'));
            // Affiche le contenu correspondant
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Appel des fonctions une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    initCertificationTabs();
    initTiltEffect(); // Initialiser l'effet tilt
});
