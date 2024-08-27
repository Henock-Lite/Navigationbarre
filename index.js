
// function showSection(sectionId) {
//     const sections = document.querySelectorAll('.container');
//     sections.forEach(section => {
//         section.classList.add('hidden');
//     });
//     document.getElementById(sectionId).classList.remove('hidden');
// }
// or


function showSection(sectionId) {
    // Sélectionne toutes les sections
    const sections = document.querySelectorAll('.container');
    
    // Parcours toutes les sections
    sections.forEach(section => {
        if (section.id === sectionId) {
            // Affiche la section demandée avec une animation
            section.classList.remove('hidden');
            section.classList.add('fade-in');
        } else {
            // Masque les autres sections
            section.classList.add('hidden');
            section.classList.remove('fade-in');
        }
    });

    // Gestion des états actifs des liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


