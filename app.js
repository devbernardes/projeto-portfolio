const themeToggleBtn = document.querySelector('.rodape__botao__tema');

function updateThemeIcon(isLightMode) {
    themeToggleBtn.innerHTML = isLightMode ? '🌑' : '☀️';
    themeToggleBtn.setAttribute('aria-label', isLightMode ? 'Mudar para tema escuro' : 'Mudar para tema claro');
    themeToggleBtn.style.color = isLightMode ? '#000' : '#fff';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    updateThemeIcon(isLightMode);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    updateThemeIcon(true);
} else {
    updateThemeIcon(false);
}