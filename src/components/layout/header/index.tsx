import React from "react";
import {
  SmileOutlined,
  FolderOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
import { Avatar, Button, Image, Popover, Typography } from "antd";
import { useAuth } from "../../../store/auth-context";

type LayoutHeaderProps = {
  setOpenMessenger: any;
};
export const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  const { setOpenMessenger } = props;
  const { user, loading, logout } = useAuth();
  console.log(">>>>>>>>> user", user);

  const onLogout = async () => {
    const res = await logout().then((res) => res);

    console.log("AFTER LOGOUT AUTH =", res);
  };
  return (
    <div className={styles.header}>
      <FolderOutlined style={{ fontSize: "30px" }} />
      <CommentOutlined
        style={{ fontSize: "30px" }}
        onClick={() => setOpenMessenger(true)}
      />

      <Popover
        placement="bottomLeft"
        // title={"Logout"}
        content={<Button onClick={onLogout}>Logout</Button>}
        trigger="click"
      >
        <Avatar
          src={
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
              style={{ width: 32, height: 32 }}
              preview={false}
            />
          }
          style={{ marginRight: "20px" }}
        />
      </Popover>
      <div className={styles.container}>
        <Typography.Text> Welcome to </Typography.Text>
        <Typography.Text strong>{user?.username}</Typography.Text>
      </div>
    </div>
  );
};
