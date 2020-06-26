import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import Link from './Link';
import Typist from 'react-typist';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		fontSize: 12,
	},
	item: {
		margin: theme.spacing(2),
	},
	button: {
		margin: theme.spacing(1),
		width: '220px',
		backgroundColor: 'black',
		color: 'green',
	},
	card: {
		maxWidth: '800px',
		padding: theme.spacing(3),
		backgroundColor: 'black',
		color: 'green',
	},
	link: {
		color: 'green',
		textDecoration: 'none',
	},
	// cursor: {
	// 	backgroundColor: 'green',
	// 	width: '10px',
	// 	height: '15px',
	// }
}));

const Home = (props) => {
	const classes = useStyles();
	const cursorOptions = {
		show: true,
		blink: true,
		element: '',
		hideWhenDone: false,
		hideWhenDoneDelay: 1000,
	};
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<Typist avgTypingDelay={100} startDelay={250} cursor={cursorOptions} >
					<Grid
						container
						direction='column'
						justify='center'
						alignItems='center'
						alignContent='space-around'
					>
						<Grid item xs={12} className={classes.item}>
							<Card className={classes.card}>
								<Typography variant='body1' component='p'>
									<code>
											let me = {'{'}name: "Ahmed"{'}'}
											<br />
											<br />
											me.title = "Software Engineer"
											<br />
											<br />
											me.resume = "/resume.png"
											<br />
											<br />
											me.github = "https://github.com/ahmedjahmi"
											<br />
											<br />
											me.email = "amjahmi@gmail.com"
									</code>
								</Typography>
							</Card>
						</Grid>
						<Grid item>
							<Link className={classes.link} href='/resume'>
								<Button
									className={classes.button}
									variant='outlined'
									disableElevation
									size='large'
									>
									<code style={{ textTransform: 'none' }}>open(me.resume)</code>
								</Button>
							</Link>
						</Grid>
						<Grid item>
							<a
								className={classes.link}
								href='https://github.com/ahmedjahmi'
								target='_blank'
								rel='noopener noreferrer'
								>
								<Button
									className={classes.button}
									variant='outlined'
									disableElevation
									size='large'
								>
									<code style={{ textTransform: 'none' }}>open(me.github)</code>
								</Button>
							</a>
						</Grid>
						<Grid item>
							<a
								className={classes.link}
								href='mailto:amjahmi@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								>
								<Button
									className={classes.button}
									variant='outlined'
									disableElevation
									size='large'
									>
									<code style={{ textTransform: 'none' }}>send(me.email)</code>
								</Button>
							</a>
						</Grid>
					</Grid>
									</Typist>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
