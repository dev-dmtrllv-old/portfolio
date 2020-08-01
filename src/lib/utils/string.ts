export const toSnakeCase = (str: string, sep: string = "-") => str.split("").map((p, i) => 
{
	if (p === p.toUpperCase() && i !== 0)
		return `${sep}${p}`;
	return p;
}).join().toLowerCase()
