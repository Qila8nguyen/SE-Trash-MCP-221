import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import Router from '../components/Router'

function MyApp({ Component, pageProps }) {
  const { session, user } = pageProps

  return <SessionProvider session={session} refetchInterval={0}>
    <Router>
      <MainLayout user={user}>
        <Component {...pageProps} />
      </MainLayout>
    </Router>
  </SessionProvider>
}

export default MyApp

export async function getStaticProps(context) {
  return {
    props: {user: {
      email: 'khapham.7165@gmail.com',
      showing: ['a', 'b', 'c']
    }}, // will be passed to the page component as props
  }
}