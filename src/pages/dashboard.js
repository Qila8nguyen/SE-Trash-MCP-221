import { Card, Col, Row, Space } from 'antd'
import Typography from 'antd/lib/typography'
import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { InfoCard } from '../components/Dashboard'
import { fetchLayout, layoutSelector } from '../redux/layout'
import { wrapper } from '../redux/store'

const { Title } = Typography
const Dashboard = (props) => {
  console.log('State on render', props.layout);
  const { data: session } = useSession()

  return (
    <div>
      <Title>
        Welcome back, {session?.user.name}
      </Title>
      <InfoCard />

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='Platform Overview' style={{ marginTop: 20, width: '70%', height: 200 }}>

        </Card>
        <Card title='New Registered Users by Division' style={{ marginTop: 20, width: '28%', height: 200 }}>

        </Card>
      </Row>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='New Registered Users by Division' style={{ marginTop: 20, width: '28%', height: 200 }}>

        </Card>
        <Card title='Platform Overview' style={{ marginTop: 20, width: '70%', height: 200 }}>

        </Card>
      </Row>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='New Registered Users by Division' style={{ marginTop: 20, width: '100%', height: 200 }}>

        </Card>
      </Row>

      <Row style={{ justifyContent: 'space-between' }}>
        <Card title='New Registered Users by Division' style={{ marginTop: 20, width: '100%', height: 200 }}>

        </Card>
      </Row>

    </div>
  )
}

export default Dashboard

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  const session = await getSession(ctx)
  await store.dispatch(fetchLayout({ email: session.user.email }))
  console.log('State on server', store.getState().layout);
  return {
    props: {
      layout: store.getState().layout
    }
  }
})
