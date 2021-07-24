import Image from 'next/image';
import { Header, CheckoutProduct } from '../components/index';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Checkout = () => {
	const items = useSelector(selectItems);

	return (
		<div className='bg-gray-100'>
			<Header />
			<main className='lg:flex max-w-screen-2xl mx-auto'>
				{/* left side */}
				<div className='flex-grow m-5 shadow-sm'>
					<Image
						src='https://links.papareact.com/ikj'
						width={1020}
						height={250}
						objectFit='contain'
					/>
					<div className='flex flex-col p-5 space-y-10 bg-white'>
						<h1 className='text-3xl border-b pb-4'>
							{items.length == 0
								? `Your Amazon Basket is empty.`
								: `Shopping Basket`}
						</h1>

						{items.map((item, index) => {
							const {
								id,
								title,
								price,
								description,
								rating,
								category,
								image,
								isPrime,
							} = item;
							return (
								<CheckoutProduct
									key={id}
									id={id}
									title={title}
									price={price}
									description={description}
									rating={rating}
									category={category}
									image={image}
									isPrime={isPrime}
								/>
							);
						})}
					</div>
				</div>

				{/* right side */}
				<div></div>
			</main>
		</div>
	);
};

export default Checkout;
