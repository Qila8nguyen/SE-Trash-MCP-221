import React from 'react'
import { Form, Input, Button, Checkbox, Image, Space } from 'antd'
import Text from 'antd/lib/typography/Text'
import githubIcon from '../public/asset/login/github.png'
import googleIcon from '../public/asset/login/google.png'
import loginWallpaper from '../public/asset/login/wallpaper.gif'
import { signIn, useSession } from "next-auth/react"
import { AUTH } from '../configs/constant'

const Login = () => {
  const { status } = useSession()
  const onFinish = values => {
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  if (status === AUTH.STATUS.AUTHENTICATED) return <div/>

  return (
    <div className='login-page'>
      <div className='login-box'>
        <div className='illustration-wrapper'>
          <Image
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
            <Button className='login-form-button'>
              <a
                onClick={() => {
                  signIn(AUTH.PROVIDERS.GITHUB)
                }}
              >
                Login with Github&nbsp;
                <Image style={{paddingBottom:3}} preview={false} width={20} alt='GithubIcon' src={githubIcon.src}/>
              </a>
            </Button>

            <Button className='login-form-button'>
              <a
                onClick={() => {
                  signIn(AUTH.PROVIDERS.GOOGLE)
                }}
              >
                Login with Google&nbsp;
                <Image style={{paddingBottom:3}} preview={false} width={20} alt='GoogleIcon' src={googleIcon.src}/>
              </a>
            </Button>
          </Space>
        </Form>
      </div>
    </div>
  )
}

export default Login