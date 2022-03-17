import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons'
import { Menu, Layout , Dropdown, Button, message, Row } from 'antd'
import styles from '../styles.module.scss'

const { Header } = Layout

function handleMenuClick(e) {
  message.info('Click on menu item.')
  console.log('click', e)
}

const userMenu = (
  <Menu style={{paddingTop: 10, paddingBottom: 10}} onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
)

export const HeaderLayout = (props) => {
  const { collapsed, setCollapsed } = props

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
              <UserOutlined/> khapk <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Row>
    </Header>
  )
}

export default HeaderLayout