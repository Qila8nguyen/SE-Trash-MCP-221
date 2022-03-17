import React, { useState } from 'react'
import { Layout } from 'antd'
import styles from './styles.module.scss'
import HeaderLayout from './HeaderLayout'
import SideMenuLayout from './SideMenuLayout'

const { Content, Footer } = Layout

const MainLayout = (props) => {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style = {{ minHeight:'100vh' }}>
      <SideMenuLayout collapsed={collapsed}/>
      <Layout className={styles['site-layout']}>
        <HeaderLayout
          setCollapsed={setCollapsed}
          collapsed={collapsed}
        />
        <Content
          style={{ margin: '0 16px' }}
        >
          <div style={{ padding: 24 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin template ©2022 Created by KhaPK</Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
