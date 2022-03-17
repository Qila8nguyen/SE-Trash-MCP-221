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

const { Sider } = Layout
const { SubMenu } = Menu

export const SideMenuLayout = (props) => {
  const { collapsed } = props

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logo} />
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          <Link href={ROUTE.DASHBOARD}>
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<TeamOutlined />}>
          <Link href={ROUTE.USER}>
            Users
          </Link>
        </Menu.Item>
        <SubMenu key='sub1' icon={<DesktopOutlined />} title='Compute Engine'>
          <Menu.Item key='3'>
            <Link href={ROUTE.CE.INSTANCE}>
              Instance
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link href={ROUTE.CE.VOLUME}>
              Volume
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideMenuLayout