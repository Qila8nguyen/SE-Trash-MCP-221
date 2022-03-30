import React, { useState } from 'react'
import { Layout, Spin } from 'antd'
import styles from './styles.module.scss'
import HeaderLayout from './Header'
import SideMenuLayout from './SideMenu'
import { useSession } from 'next-auth/react'
import { AUTH } from '../../configs/constant'
import Login from '../../pages/auth/login'
import RightCardDetail from './RightCardDetail'

const { Content, Footer } = Layout

const MainLayout = (props) => {
  const { children, sideMenuData } = props
  const { status } = useSession()
  const [collapsed, setCollapsed] = useState(false)

  if (status !== AUTH.STATUS.AUTHENTICATED) {
    return <Spin spinning={status === AUTH.STATUS.LOADING} className='center'>
      <Login />
    </Spin>
  }

  return <Layout style={{ minHeight: '100vh' }}>
    <SideMenuLayout collapsed={collapsed} />
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
}

export default MainLayout
