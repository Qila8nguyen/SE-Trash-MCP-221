import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'

function MyApp({ Component, pageProps, data }) {
  return <SessionProvider session={pageProps?.session} refetchInterval={0}>
    <Router>
      <MainLayout sideMenuData={data?.sideMenuData}>
        <Component {...pageProps} />
      </MainLayout>
    </Router>
  </SessionProvider>
}

MyApp.getInitialProps = async (context) => {
  const sideMenuData = [
    {
      name: 'Dashboard',
      route: '/dashboard'
    },
    {
      name: 'Users',
      route: '/users'
    },
    {
      name: 'Compute Engine',
      route: [
        {
          name: 'Instance',
          route: '/ce/instance'
        },
        {
          name: 'Volume',
          route: '/ce/volume'
        }
      ]
    }
  ]

  return {
    data: {
      sideMenuData,
    }
  }
}

export default MyApp

