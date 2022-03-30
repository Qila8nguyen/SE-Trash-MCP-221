import React from 'react'
import { InfoCardItem } from '../../Dashboard'
import SemiCircularProgressCard from '../../Dashboard/ProgressCard'

// title, amount, color = '#C8FACD', className, style, valueColor
const RightCardDetail = () => {
  return (
    <InfoCardItem title='RightSideCard' color='white' valueColor='black' aamount={30}>
      <SemiCircularProgressCard />
    </InfoCardItem>
  )
}

export default RightCardDetail