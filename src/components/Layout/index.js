import React, { useState } from 'react'
import { Layout, Spin } from 'antd'
import styles from './styles.module.scss'
import HeaderLayout from './Header'
import SideMenuLayout from './SideMenu'
import { useSession } from 'next-auth/react'
import { AUTH } from '../../configs/constant'
import Login from '../../pages/auth/login'

const { Content, Footer } = Layout

const MainLayout = (props) => {
  const { children } = props
  const { status } = useSession()
  const [collapsed, setCollapsed] = useState(false)

  // if (!props.session) {
  //   return <Spin spinning={status === AUTH.STATUS.LOADING} className='center'>
  //     <Login />
  //   </Spin>
  // }

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
