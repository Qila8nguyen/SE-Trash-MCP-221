import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AUTH, ROUTE } from '../../configs/constant'

const Router = ({ children }) => {
  const { status } = useSession()
  const router = useRouter()

  const moveToDashboard = (route) => {
    if (route === ROUTE.BASE.URL || route === ROUTE.LOGIN.URL)
      return true
    return false
  }

  useEffect(() => {
    switch (status) {
      case AUTH.STATUS.UNAUTHENTICATED:
        router.push(ROUTE.LOGIN.URL)
        break
      case AUTH.STATUS.AUTHENTICATED:
        moveToDashboard(router.route) && router.push(ROUTE.DASHBOARD.URL)
        break
      default:
        break
    }
  }, [status, router.route])

  return children
}

export default Router