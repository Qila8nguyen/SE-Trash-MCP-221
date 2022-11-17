import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;
import React, { useState } from "react";

const CustomLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("homepage");

  const onSelectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(">>>  key = ", key);
    setSelectedMenu(key);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          onSelect={onSelectMenu}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "homepage",
              icon: <UserOutlined />,
              label: "Trang của tôi",
            },
            {
              key: "manageCar",
              icon: <VideoCameraOutlined />,
              label: "Quản lí xe",
            },
            {
              key: "manageMCP",
              icon: <UploadOutlined />,
              label: "Quản lí MCP",
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
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <div style={{ padding: "20px" }}>{props.children}</div>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
