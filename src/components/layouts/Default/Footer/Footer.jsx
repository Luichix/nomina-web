import React, { useContext } from 'react'
import styles from './Footer.module.css'
import LanguageContext from '../../../../contexts/LanguageContext'
import word from '../../../../data/footer.json'
import Title from '../../../../components/common/Title'
import ThemeContext from '../../../../contexts/ThemeContext'

const Footer = () => {
  const { language } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)

  const texts = word[language]

  return (
    <div className={styles.footer}>
      <div>
        <Title theme={theme}>Nomina</Title>
      </div>
      <div className={styles.info}>
        <p>{texts.email}</p>
        <p>{texts.copyright}</p>
      </div>
    </div>
  )
}

export default Footer
