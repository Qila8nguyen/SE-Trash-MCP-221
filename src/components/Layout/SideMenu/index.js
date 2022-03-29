import React, { useContext } from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  TeamOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import styles from './styles.module.scss'
import Link from 'next/link'
import { ROUTE } from '../../../configs/constant'
import { useRouter } from 'next/router'
import { AppContext } from '../../../pages/_app'

const { Sider } = Layout
const { SubMenu } = Menu

export const SideMenuLayout = (props) => {
  const { collapsed } = props
  const route = useRouter()

  const { sideMenuData } = useContext(AppContext)

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
        {sideMenuData && sideMenuData.map(data => {
          const { title, route, subMenu } = data

          if (subMenu) {
            return <SubMenu key={route[0]} icon={mapNameToIcon(title)} title={title}>
              {subMenu.map(subData =>
                <Menu.Item key={`${route}${subData.route}`}>
                  <Link href={`${route}${subData.route}`}>
                    {`${subData.title}`}
                  </Link>
                </Menu.Item>
              )}
            </SubMenu>
          }

          return <Menu.Item key={route} icon={mapNameToIcon(title)}>
            <Link href={route}>
              {title}
            </Link>
          </Menu.Item>
        })}
      </Menu>
    </Sider>
  )
}

export default SideMenuLayout