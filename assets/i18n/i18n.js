/**
 * TourMate i18n Engine
 * Default language: English ('en')
 * Supported languages: English ('en'), Spanish ('es')
 */

const DEFAULT_LANG = 'en';
let currentLang = localStorage.getItem('tourmate_lang') || DEFAULT_LANG;
let translations = {};

// Cargar archivo JSON según el idioma
async function loadTranslations(lang) {
    try {
        const response = await fetch(`./assets/i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Could not load translation file: ${lang}.json`);
        translations = await response.json();
        applyTranslations();
    } catch (error) {
        console.error('i18n error:', error);
    }
}

// Aplicar los textos en el DOM
function applyTranslations() {
    document.documentElement.lang = currentLang;

    // 1. Textos e innerHTML
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keyPath = element.getAttribute('data-i18n').split('.');
        let value = translations;
        keyPath.forEach(key => {
            value = value ? value[key] : null;
        });

        if (value) {
            element.innerHTML = value;
        }
    });

    // 2. Atributos dinámicos (alt, aria-label)
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const [attr, keyStr] = element.getAttribute('data-i18n-attr').split(':');
        const keyPath = keyStr.split('.');
        let value = translations;
        keyPath.forEach(key => {
            value = value ? value[key] : null;
        });

        if (value && attr) {
            element.setAttribute(attr, value);
        }
    });

    // 3. Actualizar texto del botón de idioma
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = translations.lang_toggle || (currentLang === 'en' ? 'ES' : 'EN');
    }
}

// Alternar entre EN y ES
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('tourmate_lang', currentLang);
    loadTranslations(currentLang);
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadTranslations(currentLang);

    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});