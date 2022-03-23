import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import Router from '../components/Router'

function MyApp({ Component, pageProps }) {
  const { session } = pageProps

  return <SessionProvider session={session} refetchInterval={0}>
    <Router>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Router>
  </SessionProvider>
}

export default MyApp
