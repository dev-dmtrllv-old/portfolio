import React from "react";
import { createClassFromProps } from "../utils/react";

import "./styles/view.scss";

export const View: React.FC<IViewProps> = ({ type = "div", children, absolute, fill, fixed, className, ...props }) =>
{
	const cn = createClassFromProps("view", { absolute, fixed, fill });
	return React.createElement(type, { className: cn, ...props }, children);
};

export type ViewDirection = "horizontal" | "vertical";

interface IViewProps extends ReactProps<HTMLElement>
{
	absolute?: boolean;
	fixed?: boolean;
	fill?: boolean | ViewDirection;
	type?: keyof React.ReactHTML;
}
