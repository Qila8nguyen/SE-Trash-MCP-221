import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Image,
  Space,
  Spin,
  Typography,
  message,
} from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./styles.module.scss";
import { AuthConsumer, useAuth } from "../../store/auth-context";

const LoginForm: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const { user: authenUser, login } = auth;

  const error = () => {
    message.error("Wrong User Account. Please Try Again", 2);
  };

  useEffect(() => {
    if (authenUser) {
      console.log("authenUser", authenUser);
      router.push(`/${authenUser?.role}`);
    }
  }, [authenUser]);

  const onFinish = async (values: any) => {
    setLoading(true);
    console.log("Success:", values);
    const { username, password } = values;
    const res = await login(username, password)
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((err) => {
        error();
        setLoading(false);
        return err;
      });
    // const res = await checkUser(values);

    console.log("after sign in response", res);
    if (res.code === "ERR_BAD_REQUEST") {
      error();
    } else {
      console.log("res.auth", auth?.user);
      router.push(`/${res.role}`);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return loading ? (
    <Spin />
  ) : (
    <Space className={styles.container}>
      <Image
        style={{ overflow: "hidden" }}
        width={500}
        height={500}
        preview={false}
        src={`https://images.unsplash.com/photo-1617641428728-a8165a486813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80`}
      />
      <div className={styles.form}>
        <Typography.Title level={2} style={{ marginBottom: "20px" }}>
          Login
        </Typography.Title>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Space>
  );
};

export default LoginForm;
