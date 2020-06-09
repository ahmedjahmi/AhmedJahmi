import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import Link from './Link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: '100vh',
		marginTop: '33vh',
		marginBottom: '33vh',
	},
	button: {
		margin: theme.spacing(1),
		width: '220px',
		backgroundColor: 'black',
		color: 'green',
	},
	card: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		backgroundColor: 'black',
		color: 'green',
	},
}));

const Home = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid
						container
						direction='column'
						justify='center'
						alignItems='center'
					>
						<Grid item>
							<Card className={classes.card}>
								<Typography variant='h5' component='h1' align='center'>
									<code>
										let me = {'{'}"name": "Ahmed Jahmi"{'}'}
									</code>
								</Typography>
								<Typography variant='h6' component='h2' align='center'>
									<code>me.title = "Software Engineer"</code>
								</Typography>
								<Typography variant='h6' component='h2' align='center'>
									<code>me.projects = "https://github.com/ahmedjahmi"</code>
								</Typography>
								<Typography variant='h6' component='h2' align='center'>
									<code>me.email = "amjahmi@gmail.com"</code>
								</Typography>
								<Typography variant='h6' component='h2' align='center'>
									<code>me.twitter = "https://twitter.com/JahmiAmor"</code>
								</Typography>

							</Card>
						</Grid>
						<Grid item>
							<Link href='/resume'>
								<Button
									className={classes.button}
									variant='outlined'
									disableElevation
									size='large'
								>
									<code style={{ textTransform: 'none' }}>
										openResume(me.name)
									</code>
								</Button>
							</Link>
						</Grid>
						<Grid item>
							<Link href='/'>
							</Link>
							<Button
								className={classes.button}
								variant='outlined'
								disableElevation
								size='large'
							>
								<code style={{ textTransform: 'none' }}>
									openGithub(me.projects)
								</code>
							</Button>
						</Grid>
						<Grid item>
							<Link href='/'>
							</Link>
							<Button
								className={classes.button}
								variant='outlined'
								disableElevation
								size='large'
							>
								<code style={{ textTransform: 'none' }}>
									sendEmail(me.email)
								</code>
							</Button>
						</Grid>
						<Grid item>
							<Button
								className={classes.button}
								variant='outlined'
								disableElevation
								size='large'
							>
								<code style={{ textTransform: 'none' }}>
									openTwitter(me.twitter)
								</code>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
