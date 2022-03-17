import React from 'react'
import styles from './styles.module.scss'
import InfoCardItem from '../InfoCardItem'

export const InfoCard = (props) => {
  return (
    <div className={styles['info']}>
      <InfoCardItem color='#ff4d4f' valueColor='#610b00' className={styles['info-card']} title='User' amount='100'/>
      <InfoCardItem color='#ffec3d' valueColor='#614700' className={styles['info-card']} title='Instance' amount='123749'/>
      <InfoCardItem color='#73d13d' valueColor='#092b00' className={styles['info-card']} title='Value' amount='8231'/>
      <InfoCardItem color='#40a9ff' valueColor='#030852' className={styles['info-card']} title='User' amount='213'/>
    </div>
  )
}

export default InfoCard
