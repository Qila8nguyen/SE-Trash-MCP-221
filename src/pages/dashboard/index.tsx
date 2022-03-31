import { Card, Row , Col} from 'antd'
import Typography from 'antd/lib/typography'
<<<<<<< HEAD
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'
// import { InfoCard } from '../../components/Dashboard'
import RightSideCardDetail from '../../components/Layout/RightSideCardDetail'
import Page404 from '../../components/Page/404'
import { fetchUserFromMongo } from '../../redux/layout'
import { store } from '../../redux/layout/store'
import { getLayout, isAccessAllowed } from '../../utils'
=======
import React from 'react'
import { getPreProcessProps } from '../../utils'
import Page404 from '../../components/Page/404'
import { InfoCard } from '../../components/Dashboard'
import { wrapper } from '../../redux/store'
import { GetServerSideProps } from 'next'

>>>>>>> cdbbbccf0ca1db607067fc92ea2ecc8335c10bd2

const { Title } = Typography
const Dashboard = (props) => {
  const { isAllowed, session } = props
  if (!isAllowed) return <Page404 />

  return (
<<<<<<< HEAD
    <>
      <Title>Welcome back, {session?.user.name}</Title>

      <Row gutter={[20,20]}>
        <Col span={17} /*style={{ width: "70%", marginRight: "30px" }} */>
          <Row style={{ justifyContent: "space-between" }}>
            <Card
              title="Platform Overview"
              style={{ marginTop: 20, width: "70%", height: 200 }}
            ></Card>
            <Card
              title="New Registered Users by Division"
              style={{ marginTop: 20, width: "28%", height: 200 }}
            ></Card>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Card
              title="New Registered Users by Division"
              style={{ marginTop: 20, width: "28%", height: 200 }}
            ></Card>
            <Card
              title="Platform Overview"
              style={{ marginTop: 20, width: "70%", height: 200 }}
            ></Card>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Card
              title="New Registered Users by Division"
              style={{ marginTop: 20, width: "100%", height: 200 }}
            ></Card>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Card
              title="New Registered Users by Division"
              style={{ marginTop: 20, width: "100%", height: 200 }}
            ></Card>
          </Row>
        </Col>

        <Col style={{marginTop: '20px'}}>
          <RightSideCardDetail/>
        </Col>

        </Row>
    </>
  );
};
=======
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

>>>>>>> cdbbbccf0ca1db607067fc92ea2ecc8335c10bd2
export default Dashboard

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  const preProcessProps = await getPreProcessProps(context, store)

<<<<<<< HEAD
  const session = await getSession(context);
  store.dispatch(fetchUserFromMongo({email: session.user.email}));

  return { props: {isAllowed, layout} }
}
=======
  return {
    props: {
      ...preProcessProps
    }
  }
})
>>>>>>> cdbbbccf0ca1db607067fc92ea2ecc8335c10bd2
