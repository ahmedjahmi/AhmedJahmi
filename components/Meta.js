import Head from 'next/head';
import theme from '../lib/theme';

const Meta = () => (
	<Head>
		<meta charSet='utf-8' />
		<meta
			name='viewport'
			content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
		/>
		{/* PWA primary color */}
		<meta name='theme-color' content={theme.palette.primary.main} />
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
		/>
		<link
			rel='stylesheet'
			href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
		/>
		<title>Ahmed Jahmi</title>
	</Head>
);

export default Meta;
