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
import { useRouter } from 'next/router'

const { Sider } = Layout
const { SubMenu } = Menu
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const SideMenuLayout = (props) => {
  const { collapsed, sideMenuData } = props
  const route = useRouter()

  const mapNameToIcon = (name) => {
    switch (name) {
      case ROUTE.DASHBOARD.TITLE:
        return <PieChartOutlined />
      case ROUTE.USER.TITLE:
        return <TeamOutlined />
      case ROUTE.CE.TITLE:
        return <DesktopOutlined />
      default:
        break
    }
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={styles.logo} />
      <Menu theme='dark' defaultSelectedKeys={[route.asPath]} mode='inline'>
        {sideMenuData.map(data => {
          const { name, route } = data

          if (Array.isArray(route)) {
            return <SubMenu key={route[0]} icon={mapNameToIcon(name)} title={name}>
              {route.map(subData =>
                <Menu.Item key={subData.route}>
                  <Link href={subData.route}>
                    {`${subData.name}`}
                  </Link>
                </Menu.Item>
              )}
            </SubMenu>
          }

          return <Menu.Item key={route} icon={mapNameToIcon(name)}>
            <Link href={route}>
              {name}
            </Link>
          </Menu.Item>
        })}
      </Menu>
    </Sider>
  )
}

export default SideMenuLayout