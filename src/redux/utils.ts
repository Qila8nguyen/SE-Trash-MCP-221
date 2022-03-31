
import { DeepNullable } from '../utils/misc'
import { Layout } from "../interfaces";

export const parseLayout = (layout: DeepNullable): Layout => {
	return (layout && Array.isArray(layout)
		? layout.map((e) => {
				const { route, title, subMenu } = e;
				return {
					route: typeof route === "string" ? route : "",
					title: typeof title === "string" ? title : "",
					subMenu: subMenu ? parseLayout(subMenu) : null,
				};
		  })
		:[]);
};
