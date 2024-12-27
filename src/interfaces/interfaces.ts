import type { Props as ProductButtonsProps } from '../components/ProductButtons';
import type { Props as ProductCardProps } from '../components/ProductCard';
import type { Props as ProductImageProps } from '../components/ProductImage';
import type { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	counter: number;
}

export interface ProductinCart extends Product {
	counter: number;
}

export interface InitialValue {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number) => void;
	reset: () => void;
}
