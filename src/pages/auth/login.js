import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Image, Space, Spin, notification } from 'antd'
import Text from 'antd/lib/typography/Text'
import { signIn, useSession, getProviders } from "next-auth/react"
import { useRouter } from 'next/router'
import loginWallpaper from '../../public/asset/login/wallpaper.png'
import { AUTH, IMAGE, ROUTE } from '../../configs/constant'

const Login = () => {
  const { status } = useSession()
  const router = useRouter()

  const [loginProviders, setLoginProviders] = useState(null)

  const onFinish = values => {
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    getProviders()
      .then(providers => {
        setLoginProviders(providers)
      })
      .catch(err => {
        notification.error({
          placement: 'topRight',
          message: err.message,
          description: 'Cannot get log in providers'
        })
      })
    router.prefetch(ROUTE.DASHBOARD.URL)
  }, [])

  if (status === AUTH.STATUS.AUTHENTICATED) return <Spin className='center'/>

  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='illustration-wrapper'>
          <Image
            className='illustration-wrapper'
            src={loginWallpaper.src}
            preview={false}
            alt='LoginWallpaper'
          />
        </div>
        <Form
          name='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className='form-title'>Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder='Username'
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder='Password'
            />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              LOGIN
            </Button>
          </Form.Item>

          <div style={{width:'100%', textAlign:'center', paddingBottom: 10, marginTop: -10}}>
            <Text>Or</Text>
          </div>

          <Space direction='vertical' style={{width:'100%'}}>
            {loginProviders && Object.values(loginProviders).map((provider) => (
              <Button key={provider.name} className='login-form-button' onClick={() => {
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}/dashboard`,
                })
              }}>
                Log in with {provider.name}&nbsp;
                <Image style={{paddingBottom:3}} preview={false} width={20} alt='providerIcon' src={IMAGE[provider.id]?.src}/>
              </Button>
            ))}
          </Space>
        </Form>
      </div>
    </div>
  )
}

export default Login
