import { Card, Row } from 'antd'
import Typography from 'antd/lib/typography'
import React from 'react'
import { getPreProcessProps } from '../../utils'
import Page404 from '../../components/Page/404'
import { InfoCard } from '../../components/Dashboard'
import { wrapper } from '../../redux/store'
import { GetServerSideProps } from 'next'


const { Title } = Typography
const Dashboard = (props) => {
  const { isAllowed, session } = props
  if (!isAllowed) return <Page404 />

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  const preProcessProps = await getPreProcessProps(context, store)

  return {
    props: {
      ...preProcessProps
    }
  }
})
