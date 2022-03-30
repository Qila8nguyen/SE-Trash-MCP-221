import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Menu, Layout , Dropdown, Button, Row, Image } from 'antd'
import styles from './styles.module.scss'
import { signOut, useSession } from 'next-auth/react'
import { ROUTE } from '../../../configs/constant'

const { Header } = Layout

export const HeaderLayout = (props) => {
  const { collapsed, setCollapsed } = props
  const { data: session } = useSession()

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const userMenu = (
    <Menu style={{ paddingTop: 10, paddingBottom: 10 }}>
      <Menu.Item
        key='1' icon={<LogoutOutlined />}
        onClick={() => {
          signOut({
            callbackUrl: `${window.location.origin}${ROUTE.LOGIN.URL}`
          })
        }}
      >
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <Header>
      <Row className={styles['header-row']}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: styles.trigger,
          onClick: toggle,
        })}
        <div className='p-r-20'>
          <Dropdown overlay={userMenu}>
            <Button style={{ fontWeight: 700, paddingLeft: 8 }}>
              <Image
                className={styles.avatar}
                height={26}
                width={26}
                preview={false}
                src={session?.user.image}
              />
                {session?.user.email}
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Row>
    </Header>
  )
}

export default HeaderLayout