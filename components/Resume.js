import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Link from './Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	imgContainer: {
		margin: theme.spacing(2),
	},
	img: {
		height: '100%',
		width: '100%',
		objectFit: 'contain',
	},
	chevron: {
		color: theme.palette.primary.main
	},
	button: {
		color: theme.palette.primary.main
	}
}));

const Resume = (props) => {
    const classes = useStyles();
    
    return (
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Grid
							container
							justify='flex-start'
							direction='row'
							alignItems='flex-start'
						>
							<Grid item xs={6} md={3}>
								<Link href='/home'>
									<Button variant='text' disableElevation>
										<ChevronLeftIcon className={classes.chevron} />
									</Button>
								</Link>
							</Grid>
						</Grid>
						<Grid
							container
							justify='center'
							alignItems='center'
							direction='column'
						>
							<Grid item xs={12} lg={12}>
								<div className={classes.imgContainer}>
									<img src='/aj_resume.png' className={classes.img} />
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
}

export default Resume;