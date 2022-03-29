import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React, { useEffect, useState, createContext } from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'
import getLayout from '../utils/preProcess'

export const AppContext = createContext({})

function MyApp({ Component, pageProps, layout }) {
  const [sideMenuData, setSideMenuData] = useState([])

  useEffect(() => {
    layout && setSideMenuData(layout)
  }, [layout])

  return <SessionProvider session={pageProps?.session} refetchInterval={0}>
    <Router>
      <AppContext.Provider value={{ sideMenuData }}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppContext.Provider>
    </Router>
  </SessionProvider>
}

export default MyApp

MyApp.getInitialProps = async (ctx) => {
  const isServer = () => typeof window === 'undefined'

  if (isServer()) {
    return {layout: await getLayout(ctx)}
  }
  else {
    return { layout: null }
  }
}
