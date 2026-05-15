// Menú Hamburguesa - Funcionamiento en móvil y tablet
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function() {
            // Alternar visibilidad de los enlaces
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
        });

        // Cerrar el menú cuando se hace clic en un enlace
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                // Solo ocultar en móvil/tablet (cuando hamburguesa visible)
                if (window.innerWidth < 1024) {
                    navLinks.classList.add('hidden');
                    navLinks.classList.remove('flex');
                }
            });
        });
    }
});
