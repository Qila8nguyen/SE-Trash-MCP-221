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
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Trang của tôi",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Quản lí xe",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Quản lí MCP",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <div style={{ padding: "10px" }}>{props.children}</div>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
