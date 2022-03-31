import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React, { useEffect, useState, createContext } from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'
<<<<<<< HEAD
import WrapperStatistic from 'antd/lib/statistic/Statistic'
=======
import { store, wrapper } from '../redux/store'
import { Provider } from 'react-redux'
>>>>>>> cdbbbccf0ca1db607067fc92ea2ecc8335c10bd2

export const AppContext = createContext({})

function MyApp({ Component, pageProps }) {
  const { session } = pageProps

<<<<<<< HEAD
  const [sideMenuData, setSideMenuData] = useState([])

  useEffect(() => {
    layout && setSideMenuData(layout)
  }, [layout])

  return <SessionProvider refetchInterval={0}>
    <Router>
      {/* <AppContext.Provider value={{ sideMenuData }}>
        {session ? */}
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout> :
          <Component {...pageProps} />
        
      {/* </AppContext.Provider> */}
    </Router>
  </SessionProvider>
=======
  return (
    <Provider store={store}>
      <SessionProvider refetchInterval={0}>
        <Router>
          {session ?
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout> :
            <Component {...pageProps} />
          }
        </Router>
      </SessionProvider>
    </Provider>
  )
>>>>>>> cdbbbccf0ca1db607067fc92ea2ecc8335c10bd2
}

export default wrapper.withRedux(MyApp)
