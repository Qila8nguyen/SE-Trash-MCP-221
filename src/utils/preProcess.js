import { getSession } from 'next-auth/react'

export const getLayout = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) return { layout: null }

  const res = await fetch(`${process.env.BACK_END_HOST}/layout?email=${session.user.email}`)
  const json = await res.json()

  return { layout: json.rights }
}

export const isAccessAllowed = async (layout = [], url) => {
  console.log('url :>> ', url)
  if (!layout.length) return false
  for (const item in layout) {
    const { route, subMenu } = item
    if (subMenu) {
      for (const i in subMenu) {
        if (i.route !== url) return false
      }
    }

    if (route !== url) return false
  }

  return true
}

export default getLayout
