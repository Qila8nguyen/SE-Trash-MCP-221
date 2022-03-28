import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import React, { useEffect, useState, createContext } from 'react'
import { getSession, SessionProvider } from "next-auth/react"
import Router from '../components/Router'

export const AppContext = createContext({})

function MyApp({ Component, pageProps, layout }) {
  const [layoutData, setLayoutData] = useState([])

  useEffect(() => {
    layout && setLayoutData(layout)
  }, [layout])

  return <AppContext.Provider value={{ layoutData }}><SessionProvider session={pageProps?.session} refetchInterval={0}>
    <Router>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Router>
  </SessionProvider></AppContext.Provider>
}

export default MyApp

const isServer = () => typeof window === 'undefined'
MyApp.getInitialProps = async (ctx) => {
  if (isServer()) {
    const session = await getSession(ctx)
    if (!session) return { layout: null }
    const res = await fetch(`${process.env.BACK_END_HOST}/layout?email=${session.user.email}`)
    const json = await res.json()
    return { layout: json.rights }
  }
  else {
    return { layout: null }
  }
}
