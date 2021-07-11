import Head from 'next/head';
import { Header } from '../components/index';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Amazon 2.0</title>
			</Head>
			<Header />
		</div>
	);
}
