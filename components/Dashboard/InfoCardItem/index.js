import { Statistic } from 'antd'
import React from 'react'
import styles from './styles.module.scss'

export const InfoCardItem = (props) => {
  const { title, amount, color = '#C8FACD', className, style, valueColor} = props

  return (
    <div className={className || styles['info-card']} style={{ ...style, backgroundColor: color}}>
      <Statistic
        titleStyle
        valueStyle={{fontSize: 30, fontWeight: 500, color: valueColor}}
        className={styles.center}
        title={title}
        value={amount}
      />
    </div>
  )
}

export default InfoCardItem