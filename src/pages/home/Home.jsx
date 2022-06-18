import React, { useContext } from 'react'
import styles from './Home.module.css'
import LanguageContext from '../../contexts/LanguageContext'
import Title from '../../components/common/Title'
import Bold from '../../components/common/Bold'
import cover from '../../assets/cover.svg'
import Plan from '../../components/customs/Plan'
import Frame from '../../components/common/Frame'
import Typed from '../../components/common/Typed'
import { FaLayerGroup } from 'react-icons/fa'
import { BsImage } from 'react-icons/bs'
import word from '../../data/home.json'

const Home = () => {
  const { language } = useContext(LanguageContext)

  const texts = word[language]

  return (
    <div className={styles.container}>
      <div className={styles.init}>
        <span className={styles.typed}>
          <Typed texts={texts.hi} />
        </span>
      </div>
      <div className={styles.section}>
        <div className={styles.group}>
          <div className={styles.item}>
            <Bold bold={texts.bold1} line={texts.line1} unique="82%">
              {texts.info1}
            </Bold>
          </div>
          <div className={styles.item}>
            <Bold bold={texts.bold2} line={texts.line2} unique="84%">
              {texts.info2}
            </Bold>
          </div>
          <div className={styles.item}>
            <Bold bold={texts.bold3} line={texts.line3} unique="45">
              {texts.info3}
            </Bold>
          </div>
        </div>
      </div>
      <div className={styles.cover}>
        <figure className={styles.figure}>
          <img alt="cover" src={cover} className={styles.image} />
        </figure>
        <p className={styles.part}>
          <Typed
            fadeOut={true}
            typeSpeed={15}
            backSpeed={0}
            fadeOutDelay={5000}
            texts={texts.textImage}
          />
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.plans}>
          <Title size="xl">{texts.scalable}</Title>
          <span className={styles.text}>{texts.commentPlans}</span>
        </div>
        <div className={styles.gridPlans}>
          <Plan data={texts.plan.bronze} />
          <Plan data={texts.plan.silver} />
          <Plan data={texts.plan.gold} />
        </div>
      </div>
      <div className={styles.section}>
        <Title size="xl" isCentered={true}>
          {texts.titleInfoProduct}
        </Title>
        <span className={styles.text}>{texts.subtitleInfoProduct}</span>
        <div className={styles.gridFrame}>
          {texts.product.map((item, index) => (
            <Frame
              key={index}
              title={item.title}
              text={item.text}
              Icon={index % 2 === 0 ? FaLayerGroup : BsImage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
