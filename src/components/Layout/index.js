import React, { useEffect, useState } from 'react'
import { Layout, Spin } from 'antd'
import styles from './styles.module.scss'
import HeaderLayout from './HeaderLayout'
import SideMenuLayout from './SideMenuLayout'
import { useSession } from 'next-auth/react'
import { AUTH, ROUTE } from '../../configs/constant'
import { useRouter } from 'next/router'
import Login from '../../pages/login'

const { Content, Footer } = Layout

const MainLayout = (props) => {
  const { children } = props
  const { status } = useSession()
  const router = useRouter()

  const [collapsed, setCollapsed] = useState(false)

  const moveToDashboard = (route) => {
    if (route === ROUTE.BASE.URL || route === ROUTE.LOGIN.URL)
      return true
    return false
  }
  useEffect(() => {
    switch (status) {
      case AUTH.STATUS.UNAUTHENTICATED:
        router.push(ROUTE.LOGIN.URL)
        break
      case AUTH.STATUS.AUTHENTICATED:
        moveToDashboard(router.route) && router.push(ROUTE.DASHBOARD.URL)
        break
      default:
        break
    }
  }, [status, router.route])

  switch (status) {
    case AUTH.STATUS.AUTHENTICATED:
      return <Spin spinning={status === AUTH.STATUS.LOADING}>
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
      </Spin>
    default:
      return <Spin className='login-page' spinning={status === AUTH.STATUS.LOADING}>
        <Login/>
      </Spin>

  }
}

export default MainLayout
