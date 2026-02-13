console.log("Vibe Coding Portfolio Initialized 🚀");

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Simple toggle for now, will enhance later
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        if (nav.style.display === 'block') {
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = '#0f172a';
            nav.style.padding = '2rem';
            nav.style.textAlign = 'center';
            nav.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        }
    });
}
