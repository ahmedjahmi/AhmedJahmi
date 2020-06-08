import React from 'react';
import Meta from './Meta';
import Header from './Header';
import Container from '@material-ui/core/Container';
import Head from 'next/head';

const Page = (props) => {
	return (
		<>
			<Head>
				<Meta />
			</Head>
			<Header />
			<Container>{props.children}</Container>
		</>
	);
};

export default Page;