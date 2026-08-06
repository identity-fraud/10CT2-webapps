function themeToggle() {
    const icon = document.getElementById('toggle-icon')
    const button = document.getElementById('theme-toggle');
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (icon) icon.src = 'assets/day.png';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (icon) icon.src = 'assets/night.png';
    }
}

(function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    window.addEventListener('DOMContentLoaded', () => {
        const icon = document.getElementById('toggle-icon');
        if (icon) {
            icon.src = savedTheme === 'dark' ? 'assets/night.png' : 'assets/day.png';
        }
    });
})();