/**
 * Mark all the properties of `T` as readonly. Wipe out all functions in `T`
 */
export type DeepReadonly<T> = T extends Set<any>
	? T
	: {
			readonly [key in keyof T]: DeepReadonly<T[key]>;
	  };

type Action<T, P = undefined> = {
	readonly type: T;
	readonly payload: DeepReadonly<P>;
};

export const enum ActionType {
	FETCH_LAYOUT_REQUESTED = "layout/FETCH_REQUESTED",
	FETCH_LAYOUT_SUCCEEDED = "layout/FETCH_SUCCEEDED",
	FETCH_LAYOUT_FAILED = "layout/FETCH_FAILED",
	FETCH_LAYOUT = "layout/FETCH_LAYOUT",
}

export type Actions =
	| Action<ActionType.FETCH_LAYOUT_REQUESTED>
	| Action<ActionType.FETCH_LAYOUT_SUCCEEDED, { layout: [] }>
	| Action<ActionType.FETCH_LAYOUT_FAILED, { error: AppError }>;

export const enum AppError {
	NO_ERROR = 0,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
	BAD_GATEWAY = 502,
}

