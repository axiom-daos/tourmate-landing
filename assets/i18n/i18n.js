/**
<<<<<<< HEAD
 * i18n.js — TourMate internationalization module
 * NexumDevs · UPC 2026
 *
 * Loads EN/ES translations from JSON files and applies them
 * to all elements with a data-i18n attribute.
 */

let currentLang = 'en';
let translations = {};

/**
 * Flattens a nested object into dot-notation keys.
 * e.g. { nav: { tourists: "Tourists" } } → { "nav.tourists": "Tourists" }
 */
function flattenTranslations(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenTranslations(obj[key], fullKey));
    } else {
      acc[fullKey] = obj[key];
    }
    return acc;
  }, {});
}

/**
 * Loads a JSON translation file for the given language code.
 * @param {string} lang - 'en' or 'es'
 * @returns {Promise<object>} flattened translations object
 */
async function loadTranslations(lang) {
  const response = await fetch(`assets/i18n/${lang}.json`);
  const data = await response.json();
  return flattenTranslations(data);
}

/**
 * Applies the loaded translations to all [data-i18n] elements in the DOM.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] !== undefined) {
      if (key.endsWith('_html')) {
        el.innerHTML = translations[key];
      } else {
        el.textContent = translations[key];
      }
    }
  });
}

/**
 * Toggles the language between EN and ES, updates the navbar button,
 * and announces the change to screen readers.
 */
async function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  translations = await loadTranslations(currentLang);
  applyTranslations();

  // update navbar toggle button labels
  const langCode = document.getElementById('lang-code');
  const langFlag = document.getElementById('lang-flag');
  const langBtn  = document.getElementById('lang-toggle-btn');

  if (currentLang === 'es') {
    if (langCode) langCode.textContent = 'EN';
    if (langFlag) langFlag.textContent = '🇺🇸';
    if (langBtn)  langBtn.setAttribute('aria-label', 'Switch to English');
  } else {
    if (langCode) langCode.textContent = 'ES';
    if (langFlag) langFlag.textContent = '🇵🇪';
    if (langBtn)  langBtn.setAttribute('aria-label', 'Switch to Spanish');
  }

  // announce language change to screen readers
  const announcer = document.getElementById('lang-announcer');
  if (announcer) {
    announcer.textContent = currentLang === 'es'
      ? 'Idioma cambiado a español'
      : 'Language changed to English';
  }
}

/**
 * Initializes i18n on page load — loads English by default.
 */
async function initI18n() {
  translations = await loadTranslations(currentLang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', initI18n);
=======
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
>>>>>>> feature/agencias-viajeros-section
