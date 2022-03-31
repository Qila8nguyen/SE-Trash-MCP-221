import { AppError } from "../redux/types";
import { formatQueryString, formatParamPath } from "./uri";
import { API_ENDPOINT } from "../constants";
import { DeepNullable } from './misc';

type ApiType = "GET" | "POST" | "PUT" | "DELETE";

export interface SuccessResponse<T> {
	status: "ok";
	body: T;
}

export interface ErrorResponse<T> {
	status: "error";
	error: AppError;
	message?: string;
	body?: T;
}

export type APIResponse<S, E> = SuccessResponse<S> | ErrorResponse<E>;

export interface InputArg {
	[key: string]:
		| unknown[]
		| InputArg
		| string
		| number
		| boolean
		| null
		| undefined;
}

export function makeApiCaller<
	Args extends InputArg = never,
	OkBody = never,
	ErrBody = unknown
>(
	type: ApiType,
	path: string,
	onSuccess: (
		response: DeepNullable | null | undefined,
		requests: Args
	) => APIResponse<OkBody, ErrBody>,
	onError?: (
		response: DeepNullable | null | undefined,
		requests: Args
	) => APIResponse<OkBody, ErrBody>
) {
	return async (data: Args): Promise<APIResponse<OkBody, ErrBody>> => {
		const fetcher = constructFetcher(type);
		const res = await fetcher(path, data);
		if (res.error) {
			return onError
				? onError(res, data)
				: {
						status: "error",
						error: AppError.BAD_REQUEST,
				  };
		}
		return onSuccess(res.data, data);
	};
}

type Fetcher = (path: string, data: InputArg) => Promise<any>;

function constructFetcher(type: ApiType): Fetcher {
	return async (path, data) => {
		const parsedPath = formatParamPath(path, data);
		switch (type) {
			case "GET":
				return await fetch(
					`${API_ENDPOINT}${parsedPath}${formatQueryString(data)}`
				)
					.then((res) => res.json())
					.catch(() => undefined);
			case "POST":
				return await fetch(`${API_ENDPOINT}${parsedPath}`, {
					method: "POST",
					mode: "cors",
					cache: "no-cache",
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.catch(err => err);
			case "PUT":
				return await fetch(`${API_ENDPOINT}${parsedPath}`, {
					method: "PUT",
					mode: "cors",
					cache: "no-cache",
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.catch(err => err);
			case "DELETE":
				return await fetch(`${API_ENDPOINT}${parsedPath}`, {
					method: "DELETE",
					mode: "cors",
					cache: "no-cache",
				})
					.then((res) => res.json())
					.catch(err => err);
		}
	};
}