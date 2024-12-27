// biome-ignore lint/style/useImportType: <explanation>
import React, { createContext, CSSProperties, JSX } from "react";

import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import type {
	InitialValue,
	onChangeArgs,
	Product,
	ProductCardHandlers,
	ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValue?: InitialValue;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValue,
}: Props) => {
	const { counter, maxCount, isMaxCountReached, reset, increaseBy } =
		useProduct({
			product,
			onChange,
			value,
			initialValue,
		});

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValue?.maxCount,
					product: product,

					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
