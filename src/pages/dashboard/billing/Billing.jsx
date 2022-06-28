import React, { useEffect } from 'react'
import styles from './Billing.module.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import Button from '../../../components/common/Button'
import Paragraph from '../../../components/common/Paragraph'

const Billing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    console.log('You clicked me!')
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h6 className={styles.title}> Overview </h6>
        <div className={styles.content}>
          <div className={styles.suscription}>
            <div className={styles.info}>
              <p className={styles.subtitle}>YOUR PLAN (BILLED YEARLY):</p>
              <Paragraph weight="semibold">Starter - April 2020</Paragraph>
            </div>
            <div className={styles.info}>
              <p className={styles.subtitle}>TOTAL PER YEAR</p>
              <Paragraph weight="semibold" color="primary">
                $264 USD
              </Paragraph>
            </div>
          </div>
          <div className={styles.actions}>
            <Button onClick={handleClick} info="danger" size="large">
              Cancel subscription
            </Button>
            <Button onClick={handleClick} info="primary" size="large">
              Update plan
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h6 className={styles.title}> Billing method </h6>
        <div className={styles.group}>
          <p className={styles.text}>
            Cards will be charged either at the end of the month or whenever
            your balance exceeds the usage threshold. All major credit / debit
            cards accepted.
          </p>
        </div>
        <div className={styles.group}>
          <div className={styles.card}>
            <div className={styles.item}>
              <div className={styles.owner}>
                <h6 className={styles.subtitle}> Maria Williams</h6>
                <Button size="small" info="primary">
                  Primary
                </Button>
              </div>
              <div className={styles.owner}>
                <figure className={styles.picture}>
                  <img
                    src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/brands/mastercard.svg"
                    className={styles.cardLogo}
                    alt="logo mastercard"
                  />
                </figure>
                <div className={styles.info}>
                  <Paragraph size="sm" weight="semibold">
                    MasterCard •••• 4242
                  </Paragraph>
                  <Paragraph size="xs">Debit - Expires 04/20</Paragraph>
                </div>
                <div className={styles.actions}>
                  <Button info="primary">
                    <BsFillPencilFill /> Edit
                  </Button>
                  <Button info="danger">
                    <MdDelete /> Delete
                  </Button>
                </div>
              </div>
            </div>
            {/* // src="https://godigitpage-eyvhte74x-gtavo95.vercel.app/assets/svg/brands/visa.svg" */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
