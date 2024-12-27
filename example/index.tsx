import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ProductButtons, ProductImage, ProductTitle } from "../.";
import ProductCard from "../dist/components";

const product = {
	id: "1",
	title: "Coffe Mog",
	img: "./coffee-mug.png",
};

const App = () => {
	return (
		<div>
			<ProductCard
				product={product}
				initialValue={{
					count: 4,
					maxCount: 10,
				}}
			>
				{() => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
