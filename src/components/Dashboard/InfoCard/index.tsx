import React from 'react'
import styles from './styles.module.scss'
import InfoCardItem from '../InfoCardItem'

export const InfoCard = (props) => {
  return (
    <div className={styles['info']}>
      <InfoCardItem color='#FF4169' valueColor='#610b00' className={styles['info-card']} title='User' amount='100'/>
      <InfoCardItem color='#FFB400' valueColor='#614700' className={styles['info-card']} title='Instance' amount='123749'/>
      <InfoCardItem color='#17C671' valueColor='#092b00' className={styles['info-card']} title='Value' amount='8231'/>
      <InfoCardItem color='#007BFF' valueColor='#030852' className={styles['info-card']} title='Volume' amount='213'/>
    </div>
  )
}

export default InfoCard
