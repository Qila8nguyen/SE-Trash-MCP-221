import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session} refetchInterval={0}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </SessionProvider>
}

export default MyApp
