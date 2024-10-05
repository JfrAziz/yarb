type ComparedExpression =
	| { ">": [Expression, Expression] }
	| { ">=": [Expression, Expression] };

type VariableExpression = {
	var: string;
	default?: unknown;
};

type ValueExpression = {
	val: string | number | unknown;
};

type Expression = ComparedExpression | VariableExpression | ValueExpression;

export const apply = (
	schema: Expression,
	data?: Record<string, unknown>,
): boolean | number | string | unknown => {
	if ("var" in schema) return data?.[schema.var] || schema.default;

	if ("val" in schema) return schema.val;

	if (">" in schema) {
		const lefhand = apply(schema[">"][0], data) as number;

		const righthand = apply(schema[">"][1], data) as number;

		return lefhand > righthand;
	}
};
