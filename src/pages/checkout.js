import Image from 'next/image';
import { Header, CheckoutProduct } from '../components/index';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalPrice } from '../slices/basketSlice';
import { useSession } from 'next-auth/client';
import Currency from 'react-currency-formatter';

const Checkout = () => {
	const items = useSelector(selectItems);
	const totalPrice = useSelector(selectTotalPrice);
	const [session] = useSession();

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
									key={index}
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
				{items.length > 0 ? (
					<div className='flex flex-col bg-white p-10 shadow-md'>
						{items.length > 0 && (
							<>
								<h2 className='whitespace-nowrap'>
									Subtotal ({items.length} items):{' '}
									<span className='font-bold'>
										<Currency quantity={totalPrice} />
									</span>
								</h2>
								<button
									disabled={!session}
									className={`button mt-2 ${
										!session &&
										'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
									}`}
								>
									{!session ? 'Sign in to checkout' : 'Proceed to checkout'}
								</button>
							</>
						)}
					</div>
				) : null}
			</main>
		</div>
	);
};

export default Checkout;
