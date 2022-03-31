import { InputArg } from "./fetch";

/**
 * Parse input object into query string. Ignore completely parameters except string, number and/or boolean.
 * If the final string is non-empty,`?` will be prepended to the output.
 */
export function formatQueryString(input: { [key: string]: unknown }): string {
	const params = [];
	for (const [key, value] of Object.entries(input)) {
		if (
			typeof value === "string" ||
			typeof value === "number" ||
			typeof value === "boolean"
		) {
			params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
		}
	}
	return params.length ? "?" + params.join("&") : "";
}

/**
 * Replace path params insithe `path`
 */
export function formatParamPath(path: string, params: InputArg): string {
	let parsedPath = path;
	Object.entries(params).forEach(([key, value]) => {
		const regex = new RegExp(`{${key}}`);
		const replacement =
			typeof value === "string" || typeof value === "number"
				? value.toString()
				: "";
		parsedPath = parsedPath.replace(regex, replacement);
	});

	return parsedPath;
}