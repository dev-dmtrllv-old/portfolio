import { toSnakeCase } from "./string";

export const createClassFromProps = (cn: string, props: { [key: string]: any } = {}) =>
{
	cn = toSnakeCase(cn);
	for(const prop in props)
	{
		if(props[prop] === true)
			cn += ` ${toSnakeCase(prop)}`;
		else if(typeof props[prop] === "string")
			cn += ` ${toSnakeCase(prop)}-${toSnakeCase(props[prop])}`;
	}
	return cn;
}
