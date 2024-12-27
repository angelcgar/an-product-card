import { useEffect, useRef, useState } from 'react';
import type {
	InitialValue,
	onChangeArgs,
	Product,
} from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValue?: InitialValue;
}

export const useProduct = ({
	product,
	onChange,
	value = 0,
	initialValue,
}: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValue?.count ?? value);

	// console.log(initialValue?.count);
	console.log(initialValue?.maxCount);

	const isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);
		if (initialValue?.maxCount) {
			newValue = Math.min(newValue, initialValue.maxCount);
		}

		setCounter(newValue);

		onChange?.({ counter: newValue, product });
	};

	const reset = () => {
		setCounter(initialValue?.count ?? value);
	};

	useEffect(() => {
		if (!isMounted.current) return;

		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		isMaxCountReached:
			!!initialValue?.maxCount && initialValue.maxCount === counter,
		maxCount: initialValue?.maxCount,

		increaseBy,
		reset,
	};
};
