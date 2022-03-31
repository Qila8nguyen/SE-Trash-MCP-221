import { AppError } from "../redux/types"

// type SubMenuObj = {
//   route: string,
//   title: string
// }

// type SubMenu = [SubMenuObj]

export type LayoutObj = {
  title: string,
  route: string,
  subMenu?: Layout
}

export type Layout = Array<LayoutObj>

export type LayoutState = {
	pending: boolean,
	error: AppError,
	layout: [],
}