import MainLayout from '../components/Layout'
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (router.route === '/') router.push('/dashboard')
  }, [router])

  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default MyApp
