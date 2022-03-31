/**
 * Evil type to enforce type-checking discipline
 */
 export type DeepNullable = {
	readonly [key: string]: DeepNullable | null | undefined;
};