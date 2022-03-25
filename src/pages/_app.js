import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { SessionProvider, getSession } from "next-auth/react"
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

MyApp.getInitialProps = async (appContext) => {
  const session = await getSession(appContext.ctx)
  return { session }
}