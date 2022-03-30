import { Card, Col, Row, Space } from "antd";
import Typography from "antd/lib/typography";
import { useSession } from "next-auth/react";
import React from "react";
import { InfoCard } from "../components/Dashboard";
import RightCardDetail from "../components/Layout/RightCardDetail";

const { Title } = Typography;
const Dashboard = (props) => {
  const { data: session } = useSession();
  console.log()

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

        <Col span={7} style={{marginTop: '20px'}}>
          <RightCardDetail />
        </Col>

        </Row>
    </>
  );
};

export default Dashboard;
