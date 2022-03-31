import { Card, Row , Col} from 'antd'
import Typography from 'antd/lib/typography'
import { getSession } from 'next-auth/react'
import React from 'react'
// import { InfoCard } from '../../components/Dashboard'
import RightSideCardDetail from '../../components/Layout/RightSideCardDetail'
import Page404 from '../../components/Page/404'
import { fetchUserFromMongo } from '../../redux/layout'
import { store } from '../../redux/store'
// import { getLayout, isAccessAllowed } from '../../utils'
import { getPreProcessProps } from '../../utils'
// import { InfoCard } from '../../components/Dashboard'
import { wrapper } from '../../redux/store'
import { GetServerSideProps } from 'next'


const { Title } = Typography
const Dashboard = (props) => {
  const { isAllowed, session } = props
  if (!isAllowed) return <Page404 />

  return (
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
export default Dashboard

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  
  const session = await getSession(context);
  store.dispatch(fetchUserFromMongo({email: session.user.email}));
  
  const preProcessProps = await getPreProcessProps(context, store)

  return {
    props: {
      ...preProcessProps
    }
  }
})
