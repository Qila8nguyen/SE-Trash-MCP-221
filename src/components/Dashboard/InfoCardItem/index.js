import { Statistic } from 'antd'
import React from 'react'
import styles from './styles.module.scss'


export const InfoCardItem = (props) => {
  const { children, title, amount, color = '#C8FACD', className, style, valueColor} = props

  return (
    <div className={className} style={{ ...style, backgroundColor: color}}>
      <Statistic
        titleStyle
        valueStyle={{fontSize: 30, fontWeight: 500, color: valueColor}}
        className={styles.center}
        title={title}
        value={amount}
      /> 
      {children}
    </div>
  )
}

export default InfoCardItem
