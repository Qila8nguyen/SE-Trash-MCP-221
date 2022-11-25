import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SmileOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Layout, Menu } from "antd";
import styles from "./styles.module.scss";
import classNames from "classnames";

const { Header, Sider, Content } = Layout;
import React, { useState } from "react";
import { LayoutHeader } from "./header";
import { MessengerChatbox } from "./messenger";
import { useRouter } from "next/router";

const CustomLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<string>("homepage");
  const [openMessenger, setOpenMessenger] = useState<boolean>(false);

  const onSelectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(">>>  key = ", key);
    router.push(`/back-officer/${key}`);
    setSelectedMenu(key);
  };
  return (
    //
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          onSelect={onSelectMenu}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "manageMCP",
              icon: <UploadOutlined />,
              label: "Quản lí MCP",
            },
            {
              key: "manageCar",
              icon: <VideoCameraOutlined />,
              label: "Quản lí xe",
            },
            {
              key: "homepage",
              icon: <UserOutlined />,
              label: "Trang của tôi",
            },
            {
              key: "personal",
              icon: <UploadOutlined />,
              label: "Thông tin cá nhân",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          <LayoutHeader setOpenMessenger={setOpenMessenger} />
        </Header>

        <div
          style={{ padding: "20px" }}
          // onClick={() => setOpenMessenger(false)}
        >
          {openMessenger && (
            <div className={classNames(openMessenger && styles.overlay)}>
              <MessengerChatbox onClose={() => setOpenMessenger(false)} />
            </div>
          )}
          {props.children}
        </div>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
