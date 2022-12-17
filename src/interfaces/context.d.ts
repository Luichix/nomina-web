/* ---------------------------------- types ---------------------------------- */

export type Language = 'en' | 'es'
export type Theme = 'light' | 'dark'

/* ------------------------------- interfaces ------------------------------- */

export interface ILanguageContext {
  language: Language
  changeLanguage: (language: Language) => void
}

export interface IThemeContext {
  theme: Theme
  changeTheme: () => void
}
