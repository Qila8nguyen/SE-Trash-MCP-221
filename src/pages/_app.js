import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'

function MyApp({ Component, pageProps, layout }) {
  return <SessionProvider session={pageProps?.session} refetchInterval={0}>
    <Router>
      <MainLayout sideMenuData={layout}>
        <Component {...pageProps} />
      </MainLayout>
    </Router>
  </SessionProvider>
}

export default MyApp

MyApp.getInitialProps = async (ctx) => {
  const session = await getSession(ctx)
  if (!session) return { layout: 'default' }
  const res = await fetch(`${process.env.BACK_END_HOST}/layout?email=${session.user.email}`)
  const json = await res.json()
  return { layout: json }
}
