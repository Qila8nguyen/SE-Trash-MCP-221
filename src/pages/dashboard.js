import { Card, Col, Row, Space } from 'antd'
import Typography from 'antd/lib/typography'
import React from 'react'
import { InfoCard } from '../components/Dashboard'

const { Title } = Typography
const Dashboard = () => {
  return (
    <div>
      <Title>
        Welcome back, khapk
      </Title>
      <InfoCard/>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='Platform Overview' style={{marginTop: 20, width: '70%', height: 200}}>

        </Card>
        <Card title='New Registered Users by Division' style={{marginTop: 20, width: '28%', height: 200}}>

        </Card>
      </Row>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='New Registered Users by Division' style={{marginTop: 20, width: '28%', height: 200}}>

        </Card>
        <Card title='Platform Overview' style={{marginTop: 20, width: '70%', height: 200}}>

        </Card>
      </Row>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='New Registered Users by Division' style={{marginTop: 20, width: '100%', height: 200}}>

        </Card>
      </Row>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='New Registered Users by Division' style={{marginTop: 20, width: '100%', height: 200}}>

        </Card>
      </Row>

    </div>
  )
}

export default Dashboard
