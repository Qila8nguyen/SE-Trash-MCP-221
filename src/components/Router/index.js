import { notification } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AUTH, ROUTE } from '../../configs/constant'

const Router = ({ children }) => {
  const { status } = useSession()
  const router = useRouter()

  const moveToDashboard = (route) => {
    if (route === ROUTE.BASE.URL || route === ROUTE.LOGIN.URL)
      router.push(ROUTE.DASHBOARD.URL)
  }

  useEffect(() => {
    if (router.query.error) return
    switch (status) {
      case AUTH.STATUS.UNAUTHENTICATED:
        router.push(ROUTE.LOGIN.URL)
        break
      case AUTH.STATUS.AUTHENTICATED:
        moveToDashboard(router.route)
        break
      default:
        break
    }
  }, [status, router.route])

  useEffect(() => {
    if (router.query.error) {
      notification.error({
        placement: 'topRight',
        message: 'An error has occurred',
        description: router.query.error
      })
    }
  }, [router.route])

  return children
}

export default Router