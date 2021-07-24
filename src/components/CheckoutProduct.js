import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

export const CheckoutProduct = ({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	isPrime,
}) => {
	const dispatch = useDispatch();

	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			rating,
			description,
			category,
			image,
			isPrime,
		};

		dispatch(addToBasket(product));
	};

	const removeItemFromBasket = () => {
		dispatch(removeFromBasket({ id }));
	};

	return (
		<div className='grid grid-cols-5'>
			<Image src={image} height={200} width={200} objectFit='contain' />
			<div className='col-span-3 mx-5'>
				{title}
				<div className='flex'>
					{Array(rating)
						.fill()
						.map((_, index) => {
							return <StarIcon key={index} className='h-5 text-yellow-500' />;
						})}
				</div>
				<p className='text-xs my-2 line-clamp-3'>{description}</p>
				<Currency quantity={price} />
				{isPrime && (
					<div className='flex items-center space-x-2'>
						<img
							loading='lazy'
							className='w-12'
							src='https://links.papareact.com/fdw'
							alt=''
						/>
						<p className='text-xs text-gray-500'>Free Next-day Delivery</p>
					</div>
				)}
			</div>

			<div className='flex flex-col space-y-2 my-auto justify-self-end'>
				<button className='button' onClick={addItemToBasket}>
					Add to Basket
				</button>
				<button className='button' onClick={removeItemFromBasket}>
					Remove from Basket
				</button>
			</div>
		</div>
	);
};
