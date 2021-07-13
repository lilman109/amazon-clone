import { bindActionCreators } from '@reduxjs/toolkit';
import Head from 'next/head';
import { Header, Banner } from '../components/';

export default function Home() {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Amazon 2.0</title>
			</Head>
			<Header />

			<main>
				{/* banner */}
				<Banner />
			</main>
		</div>
	);
}
