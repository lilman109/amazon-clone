import Image from 'next/image';
import { useRouter } from 'next/router';
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';

export const Header = () => {
	const [session] = useSession();
	const router = useRouter();

	return (
		<header>
			{/* top header */}
			<div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
				<div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
					<Image
						onClick={() => router.push('/')}
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>
				{/* search */}
				<div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer'>
					<input
						type='text'
						className='h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none p-x-4'
					/>
					<SearchIcon className='h-12 p-4' />
				</div>

				{/* right */}
				<div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
					<div
						onClick={session ? signOut : signIn}
						className='cursor-pointer hover:underline'
					>
						<p>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
						<p className='font-extrabold md:text-sm'>Account & Lists</p>
					</div>
					<div className='cursor-pointer hover:underline'>
						<p>Returns</p>
						<p className='font-extrabold md:text-sm'>& Orders</p>
					</div>
					<div
						onClick={() => router.push('/checkout')}
						className='relative cursor-pointer hover:underline flex items-center'
					>
						<span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
							0
						</span>
						<ShoppingCartIcon className='h-10' />
						<p className='hidden md:inline font-extrabold md:text-sm mt-2'>
							Basket
						</p>
					</div>
				</div>
			</div>

			{/* bottom header */}
			<div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
				<p className='cursor-pointer hover:underline flex items-center'>
					<MenuIcon className='h-6 mr-1' />
					All
				</p>
				<p className='link'>Prime Video</p>
				<p className='link'>Amazon Business</p>
				<p className='link'>Today's Deals</p>
				<p className='link hidden lg:inline-flex'>Electronics</p>
				<p className='link hidden lg:inline'>Food & Grceries</p>
				<p className='link hidden lg:inline-flex'>Prime</p>
				<p className='link hidden lg:inline-flex'>Buy Again</p>
				<p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
				<p className='link hidden lg:inline-flex'>Health & Personal Care</p>
			</div>
		</header>
	);
};
