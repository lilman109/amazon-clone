import Image from 'next/image';
import { Header } from '../components/index';

const Checkout = () => {
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
					<div className='flex flex-colum p-5 space-y-10 bg-white'>
						<h1 className='text-3xl border-b pb-4'>Your shopping basket</h1>
					</div>
				</div>

				{/* right side */}
				<div></div>
			</main>
		</div>
	);
};

export default Checkout;
