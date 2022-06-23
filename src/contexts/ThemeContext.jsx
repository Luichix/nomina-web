import React, { createContext, useState } from 'react'
const ThemeContext = createContext()
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../services/helpers/localStorage'

const initialTheme = loadFromLocalStorage('themeNomina') || 'light'

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = () => {
    if (theme === 'dark') {
      saveToLocalStorage('themeNomina', 'light')
      setTheme('light')
    } else {
      saveToLocalStorage('themeNomina', 'dark')
      setTheme('dark')
    }
  }

  const data = {
    handleTheme,
    theme,
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContext
