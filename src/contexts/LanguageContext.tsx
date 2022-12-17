import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { TLanguage, ILanguageContext } from '@Interfaces/context'
import { saveToStorage, loadFromStorage } from '@Services/helpers/localStorage'

export const LanguageContext = createContext<ILanguageContext | null>(null)

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<TLanguage>('en')

  useEffect(() => {
    loadFromStorage('@languageNomina').then((value) => {
      if (value === 'en' || value === 'es') {
        setLanguage(value)
      } else {
        saveToStorage('@languageNomina', 'en')
      }
    })
  }, [])

  const changeLanguage = (language: TLanguage) => {
    if (language === 'en') {
      saveToStorage('@languageNomina', 'en')
      setLanguage('en')
    } else if (language === 'es') {
      saveToStorage('@languageNomina', 'es')
      setLanguage('es')
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage,
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
