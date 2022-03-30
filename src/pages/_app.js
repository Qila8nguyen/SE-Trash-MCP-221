import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React, { useEffect, useState, createContext } from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'
import getLayout from '../utils/preProcess'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'

export const AppContext = createContext({})

function MyApp({ Component, pageProps, layout, session }) {
  const [sideMenuData, setSideMenuData] = useState([])

  useEffect(() => {
    layout && setSideMenuData(layout)
  }, [layout])

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps?.session} refetchInterval={0}>
        <Router>
          <AppContext.Provider value={{ sideMenuData }}>
            <MainLayout session={session}>
              <Component {...pageProps} />
            </MainLayout>
          </AppContext.Provider>
        </Router>
      </SessionProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)

MyApp.getInitialProps = async (ctx) => {
  const isServer = () => typeof window === 'undefined'
  const session = await getSession(ctx)

  if (isServer()) {
    return { layout: await getLayout(ctx), session }
  }
  else {
    return { layout: null, session }
  }
}
