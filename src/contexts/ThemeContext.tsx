import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { IThemeContext, Theme } from '@Interfaces/context'
import { saveToStorage, loadFromStorage } from '@Services/helpers/localStorage'

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  changeTheme() {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    initialTheme()
  }, [])

  const initialTheme = async () => {
    const value = loadFromStorage('@themeNomina') as Promise<Theme>
    if ((await value) === 'dark') {
      setTheme('dark')
    } else {
      saveToStorage('@themeNomina', 'light')
      setTheme('light')
    }
  }

  const changeTheme = () => {
    if (theme === 'dark') {
      saveToStorage('@themeNomina', 'light')
      setTheme('light')
    } else {
      saveToStorage('@themeNomina', 'dark')
      setTheme('dark')
    }
  }

  const value = {
    changeTheme,
    theme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
