import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { Layout } from '../interfaces'
import { fetchUserFromMongo } from '../redux/layout'

export const getLayout = async (session, store) => {
  if (!session) return

  await store.dispatch(fetchUserFromMongo({ email: session.user.email }))
}

export const isAccessAllowed = async (layout: Layout, context: GetServerSidePropsContext, isSlugPage?: boolean) => {
  const { resolvedUrl } = context                 // ex: '/a/[slug]?c=asd'

  const removedQueries = resolvedUrl.split('?')   // ['/a/b' , 'c=asd']
  let routes = removedQueries[0].split(/(\/)/)    // ['', '/', 'a', '/', 'b']
  if (isSlugPage) routes.splice(-2)               // ['', '/', 'a']
  const url =  routes.join('')                    // ex_result: '/a'

  for (const item of layout) {
    const { route, subMenu } = item
    if (subMenu) {
      for (const i of subMenu) {
        const subRoute = `${route}${i.route}`
        if (subRoute === url) return true
      }
    }
    else if (route === url) return true
  }

  return false
}

export const getPreProcessProps = async (context: GetServerSidePropsContext, store, isSlugPage?: boolean) => {
  const session = await getSession(context)
  if ( !session ) return { session: null, isAllowed: false}

  await getLayout(session, store)
  const layout = store.getState().layout.data
  const isAllowed = await isAccessAllowed(layout, context, isSlugPage)

  return { session, isAllowed }
}

export default getPreProcessProps
