import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Page from '../components/Page';
import theme from '../lib/theme';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		// this exposes the query to the user
		pageProps.query = ctx.query;
		return { pageProps };
	}
	// BLOCK BELOW CAME FROM MATERIAL-UI DOCS FOR NEXTJS INTEGRATION
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}
	// BLOCK ABOVE CAME FROM MATERIAL-UI DOCS FOR NEXTJS INTEGRATION

	render() {
		const { Component, apollo, pageProps } = this.props;

		return (
			<React.Fragment>
				<Head>
					<title>My Page</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{/* <ApolloProvider client={apollo}> */}
						<Page {...pageProps}>
							<Component {...pageProps} />
						</Page>
					{/* </ApolloProvider> */}
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default MyApp;