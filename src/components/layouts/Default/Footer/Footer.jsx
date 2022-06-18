import React, { useContext } from 'react'
import styles from './Footer.module.css'
import LanguageContext from '../../../../contexts/LanguageContext'
import word from '../../../../data/footer.json'

const Footer = () => {
  const { language } = useContext(LanguageContext)

  const texts = word[language]

  return (
    <div className={styles.footer}>
      <div>
        <img
          src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/logos/logo.svg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <p>{texts.email}</p>
        <p>{texts.copyright}</p>
      </div>
    </div>
  )
}

export default Footer
