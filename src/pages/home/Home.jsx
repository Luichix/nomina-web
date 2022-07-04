import React, { useContext } from 'react'
import styles from './Home.module.css'
import LanguageContext from '../../contexts/LanguageContext'
import word from '../../data/home.json'

const Home = () => {
  const { language } = useContext(LanguageContext)

  const texts = word[language]

  return (
    <div className={styles.container}>
      <div className={styles.init}>
        <span className={styles.typed}>
          <p>{texts.hi}</p>
        </span>
      </div>
    </div>
  )
}

export default Home
