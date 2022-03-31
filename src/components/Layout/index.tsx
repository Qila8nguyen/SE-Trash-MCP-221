import React, { useState } from 'react'
import { Layout } from 'antd'
import styles from './styles.module.scss'
import HeaderLayout from './Header'
import SideMenuLayout from './SideMenu'

const { Content, Footer } = Layout

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)

  return <Layout className={styles['site-layout']}>
    <SideMenuLayout collapsed={collapsed} />
    <Layout className={styles['child-site-layout']}>
      <HeaderLayout
        setCollapsed={setCollapsed}
        collapsed={collapsed}
      />
      <Content className={styles['content-layout']}>
        <div style={{ padding: 24 }}>
          {children}
        </div>
      </Content>
      <Footer className={styles['footer-layout']}>Admin template ©2022 Created by KhaPK</Footer>
    </Layout>
  </Layout>
}

export default MainLayout
