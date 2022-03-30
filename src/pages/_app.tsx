import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React, { useEffect, useState, createContext } from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'
import { store, wrapper } from '../redux/store'
import { Provider } from 'react-redux'

export const AppContext = createContext({})

function MyApp({ Component, pageProps }) {
  const { session } = pageProps

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
}

export default wrapper.withRedux(MyApp)
