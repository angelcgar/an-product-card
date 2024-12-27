import type { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardMoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardMoc, {
	Buttons: ProductButtons,
	Image: ProductImage,
	Title: ProductTitle,
});

export default ProductCard;
