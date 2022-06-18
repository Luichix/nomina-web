import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { GraphQLProvider } from './contexts/GraphQLContext'
import { AuthProvider } from './contexts/AuthContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <GraphQLProvider>
          <Provider store={store}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Provider>
        </GraphQLProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
)
