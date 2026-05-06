// Dynamic Year for Footer
const copyright = document.getElementById('copyright');
const year = new Date().getFullYear();
copyright.textContent = `© ${year} Built with GitHub Pages`;

// Simple interaction effect
document.querySelectorAll('.link-card').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Redirecting to:', link.textContent);
    });
});
