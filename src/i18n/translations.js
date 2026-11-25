export const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.letsTalk": "Let's talk",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.toggleTheme": "Toggle light / dark mode",
    "nav.toggleLang": "Switch language",
  },
  km: {
    "nav.about": "អំពី",
    "nav.skills": "ជំនាញ",
    "nav.projects": "គម្រោង",
    "nav.experience": "បទពិសោធន៍",
    "nav.contact": "ទំនាក់ទំនង",
    "nav.letsTalk": "និយាយគ្នា",
    "nav.openMenu": "បើកម៉ឺនុយ",
    "nav.closeMenu": "បិទម៉ឺនុយ",
    "nav.toggleTheme": "ប្តូរពន្លឺ / ងងឹត",
    "nav.toggleLang": "ប្តូរភាសា",
  },
};

export function translate(lang, key) {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}