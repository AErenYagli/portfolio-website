// js/theme.js

// ============================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const html = document.documentElement;

// LocalStorage'dan tema tercihini oku
const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
};

// Temayı kaydet
const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
};

// İkon güncelle
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Sayfa yüklendiğinde kayıtlı temayı uygula
window.addEventListener('DOMContentLoaded', () => {
    const currentTheme = getTheme();
    setTheme(currentTheme);
});

// Tema değiştirme butonu
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        
        // Animasyon ekle
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// Sistem teması değişikliğini dinle (Opsiyonel)
if (window.matchMedia) {
    const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    systemThemeQuery.addEventListener('change', (e) => {
        // Sadece kullanıcı manuel olarak tema seçmediyse sistem temasını kullan
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
        }
    });
}

// Keyboard shortcut (Ctrl/Cmd + Shift + D)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
});