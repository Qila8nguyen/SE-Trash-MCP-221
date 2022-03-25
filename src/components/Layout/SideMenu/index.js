import React from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  TeamOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import styles from '../styles.module.scss'
import Link from 'next/link'
import { ROUTE } from '../../../configs/constant'
import useSWR from 'swr'

const { Sider } = Layout
const { SubMenu } = Menu
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const SideMenuLayout = (props) => {
  const { collapsed } = props
  // Side menu data structure here
  const { data, error } = useSWR('/api/userInfo', fetcher)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logo} />
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          <Link href={ROUTE.DASHBOARD.URL}>
            {ROUTE.DASHBOARD.TITLE}
          </Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<TeamOutlined />}>
          <Link href={ROUTE.USER.URL}>
            {ROUTE.USER.TITLE}
          </Link>
        </Menu.Item>
        <SubMenu key='sub1' icon={<DesktopOutlined />} title={ROUTE.CE.TITLE}>
          <Menu.Item key='3'>
            <Link href={ROUTE.CE.INSTANCE.URL}>
              {`${ROUTE.CE.INSTANCE.TITLE} (10)`}
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link href={ROUTE.CE.VOLUME.URL}>
              {`${ROUTE.CE.VOLUME.TITLE} (9)`}
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideMenuLayout