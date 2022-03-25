import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import Router from '../components/Router'

function MyApp({ Component, pageProps }) {
  return <SessionProvider refetchInterval={0}>
    <Router>
      <MainLayout >
        <Component {...pageProps} />
      </MainLayout>
    </Router>
  </SessionProvider>
}

export default MyApp

