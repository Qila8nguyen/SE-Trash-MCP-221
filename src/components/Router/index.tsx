import { notification } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AUTH, ROUTE } from '../../configs/constant'

const Router = ({ children }) => {
  const { status } = useSession()
  const router = useRouter()
  const { route } = router

  const moveToDashboard = () => {
    router.push(ROUTE.DASHBOARD.URL)
  }

  const moveToLogin = () => {
    router.push(ROUTE.LOGIN.URL)
  }

  useEffect(() => {
    if (router.query.error) return
    switch (status) {
      case AUTH.STATUS.UNAUTHENTICATED:
        moveToLogin()
        break
      case AUTH.STATUS.AUTHENTICATED:
        if (route === ROUTE.BASE.URL || route === ROUTE.LOGIN.URL)
          moveToDashboard()
        break
      default:
        break
    }
  }, [status, route])

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