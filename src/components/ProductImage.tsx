// biome-ignore lint/style/useImportType: <explanation>
import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
	img?: string;
	alt?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductImage = ({ img, alt, className, style }: Props) => {
	const { product } = useContext(ProductContext);
	let imgToShow: string;

	if (img) {
		imgToShow = img;
	} else if (product.img) {
		imgToShow = product.img;
	} else {
		imgToShow = noImage;
	}

	return (
		<img
			className={`${styles.productImg} ${className}`}
			src={imgToShow}
			alt={alt}
			style={style}
		/>
	);
};
