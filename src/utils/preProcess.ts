import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { Layout } from '../interfaces'

export const getLayout = async (ctx : GetServerSidePropsContext) => {
  const session = await getSession(ctx)

  if (!session) return null

  const res = await fetch(`${process.env.BACK_END_HOST}/layout?email=${session.user.email}`)
  const json = await res.json()

  return json.rights
}

export const isAccessAllowed = async (layout : Layout, context : GetServerSidePropsContext, isSlugPage? : boolean) => {
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
