declare type ObjectMap<T = any> = { [key: string]: T };
declare type Transform<T, Type> = { [P in keyof T]: Type };

declare type ReactPropsWithRef<T extends HTMLElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
declare type ReactProps<T extends HTMLElement> = Omit<ReactPropsWithRef<T>, "ref">;

// #region ResizeObserver
declare class ResizeObserver
{
	constructor(callback: ResizeObserverCallback);
	disconnect: () => void;
	observe: (target: Element, options?: ResizeObserverObserveOptions) => void;
	unobserve: (target: Element) => void;
}

interface ResizeObserverObserveOptions
{
	box?: "content-box" | "border-box";
}

type ResizeObserverCallback = (
	entries: ResizeObserverEntry[],
	observer: ResizeObserver,
) => void;

interface ResizeObserverEntry
{
	readonly contentBoxSize: ResizeObserverEntryBoxSize;
	readonly contentRect: DOMRectReadOnly;
	readonly target: Element;
}

interface ResizeObserverEntryBoxSize
{
	blockSize: number;
	inlineSize: number;
}
// #endregion ResizeObserver

interface Window
{
	ResizeObserver: ResizeObserver;
}

declare interface Environment
{
	isDev: boolean;
	isServer: boolean;
	isClient: boolean;
}

declare const env: Environment;

declare module "*.css"
{
	const data: string;
	export default data;
}

declare module "*.scss"
{
	const data: string;
	export default data;
}

declare module "*.png"
{
	const data: any;
	export default data;
}

declare module "*.gif"
{
	const data: any;
	export default data;
}

declare module "*.jpg"
{
	const data: any;
	export default data;
}

declare module "*.jpeg"
{
	const data: any;
	export default data;
}
