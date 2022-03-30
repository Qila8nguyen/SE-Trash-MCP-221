import { getSession } from 'next-auth/react'

export const getLayout = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) return null

  const res = await fetch(`${process.env.BACK_END_HOST}/layout?email=${session.user.email}`)
  const json = await res.json()

  return json.rights
}

export const isAccessAllowed = async (layout = [], context, isSlugPage = false) => {
  const { resolvedUrl } = context                 // ex: '/a/[slug]?c=asd'
  if (!(layout && layout.length) || !resolvedUrl) return false

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
