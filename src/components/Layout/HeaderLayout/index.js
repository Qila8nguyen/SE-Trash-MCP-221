import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Menu, Layout , Dropdown, Button, message, Row } from 'antd'
import styles from '../styles.module.scss'
import { signOut, useSession } from 'next-auth/react'

const { Header } = Layout

const userMenu = (
  <Menu style={{paddingTop: 10, paddingBottom: 10}}>
    <Menu.Item
      key="1" icon={<LogoutOutlined />}
      onClick={() => {
        signOut()
      }}
    >
      Log out
    </Menu.Item>
  </Menu>
)

export const HeaderLayout = (props) => {
  const { collapsed, setCollapsed } = props

  const { data: session } = useSession()

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Header className={styles['site-layout-background']} style={{ padding: 0 }}>
      <Row style={{ justifyContent: 'space-between', alignItems:'center' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: styles.trigger,
          onClick: toggle,
        })}
        <div style={{ paddingRight: 20 }}>
          <Dropdown overlay={userMenu}>
            <Button style={{ fontWeight: 700}}>
              <UserOutlined/> {session.user.email} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Row>
    </Header>
  )
}

export default HeaderLayout