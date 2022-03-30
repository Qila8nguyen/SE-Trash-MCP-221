type SubMenuObj = {
  route: string,
  title: string
}

type SubMenu = [SubMenuObj]

type LayoutObj = {
  title: string,
  route: string,
  subMenu? : SubMenu
}

export type Layout = [LayoutObj]