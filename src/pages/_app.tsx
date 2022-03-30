import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React, { useEffect, useState, createContext } from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'
import { store, wrapper } from '../redux/store'

export const AppContext = createContext({})

function MyApp({ Component, pageProps, session }) {
  const layout = pageProps?.layout

  const [sideMenuData, setSideMenuData] = useState([])

  useEffect(() => {
    layout && setSideMenuData(layout)
  }, [layout])

  return <SessionProvider refetchInterval={0}>
    <Router>
      <AppContext.Provider value={{ sideMenuData }}>
        {session ?
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout> :
          <Component {...pageProps} />
        }
      </AppContext.Provider>
    </Router>
  </SessionProvider>
}

export default wrapper.withRedux(MyApp)

MyApp.getInitialProps = async (ctx) => {
  const session = await getSession(ctx)
  return { session }
}
