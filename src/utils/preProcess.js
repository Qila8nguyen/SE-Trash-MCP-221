import { getSession } from 'next-auth/react'

export const getLayout = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) return null

  const res = await fetch(`${process.env.BACK_END_HOST}/layout?email=${session.user.email}`)
  const json = await res.json()

  return json.rights
}

export const isAccessAllowed = async (layout = [], url) => {
  console.log('url :>> ', url)
  if (!layout.length) return false

  for (const item of layout) {
    const { route, subMenu } = item
    console.log('route :>> ', route);
    if (subMenu) {
      for (const i of subMenu) {
        if (`${route}${i.route}` === url) return true
      }
    }
    else if (route === url) return true
  }

  return false
}

export default getLayout
