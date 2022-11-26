import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  List,
  Row,
  Statistic,
  Typography,
} from "antd";
import React from "react";
import { useAuth } from "../../../store/auth-context";
import styles from "./styles.module.scss";

const data = [
  {
    title: "Assignment for Day 1",
    feedback: "Excellent",
  },
  {
    title: "Assignment for Day 2",
    feedback: "Excellent",
  },
  {
    title: "Assignment for Day 3",
    feedback: "Excellent",
  },
  {
    title: "Assignment for Day 4",
    feedback: "Excellent",
  },
];

const PersonalInformation = () => {
  const { user } = useAuth();
  const { username } = user;
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        height={200}
        style={{
          objectFit: "cover",
          width: "100%",
          objectPosition: "top",
        }}
      />
      <div className={styles.container}>
        <Card className={styles.left}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.title}
                  description={item.feedback}
                />
              </List.Item>
            )}
          />
        </Card>
        <Card className={styles.right}>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Active Hours" value={112893} />
            </Col>
            <Col span={8}>
              <Statistic
                title="Capacity of All MCPs "
                value={938}
                precision={2}
                suffix="/ 1000"
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Number of Janitors and Collectors"
                value={23}
                suffix={"/ 70"}
              />
            </Col>
          </Row>

          <Typography.Title level={5}>
            {"My name:"}
            <Typography.Text style={{ marginLeft: "30px" }}>
              {username}
            </Typography.Text>
          </Typography.Title>

          <Typography.Title level={5}>
            {"My age:"}
            <Typography.Text style={{ marginLeft: "30px" }}>35</Typography.Text>
          </Typography.Title>
        </Card>
      </div>
    </div>
  );
};
export default PersonalInformation;
