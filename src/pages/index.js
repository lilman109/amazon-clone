import { bindActionCreators } from '@reduxjs/toolkit';
import Head from 'next/head';
import { Header, Banner, ProductFeed } from '../components/';

const Home = ({ products }) => {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Amazon 2.0</title>
			</Head>
			<Header />

			<main>
				{/* banner */}
				<Banner />
				<ProductFeed products={products} />
			</main>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const products = await fetch(
		'https://fakestoreapi.com/products'
	).then((res) => res.json());

	return {
		props: {
			products: products,
		},
	};
};

export default Home;
