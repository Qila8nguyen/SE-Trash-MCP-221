export const ROUTE = {
  BASE: {
    URL: '/'
  },
  LOGIN: {
    TITLE: 'Log In',
    URL: '/auth/login',
    ERROR_URL: '/auth/login/error'
  },
  LOGOUT: {
    URL: '/auth/signout',
  },
  REGISTER: {
    TITLE: 'Register',
    URL: '/register'
  },
  DASHBOARD: {
    TITLE: 'Dashboard',
    URL: '/dashboard'
  },
  USER: {
    TITLE: 'Users',
    URL: '/users'
  },
  CE: {
    TITLE: 'Compute Engine',
    INSTANCE: {
      TITLE: 'Instance',
      URL: '/ce/instance'
    },
    VOLUME: {
      TITLE: 'Volume',
      URL: '/ce/volume'
    },
  }
}

export default ROUTE
