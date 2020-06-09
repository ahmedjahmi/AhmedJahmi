import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	header: {
		backgroundColor: 'black',
		color: 'green',
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
	imgContainer: {
		margin: theme.spacing(2),
	},
	img: {
		height: '100%',
		width: '100%',
		objectFit: 'contain',
	},
}));

const Resume = (props) => {
    const classes = useStyles();
    
    return (
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Grid
							container
							justify='center'
							alignItems='center'
							direction='column'
						>
							<Grid item xs={6}>
								<Typography
									className={classes.header}
									variant='h2'
									component='h1'
									align='center'
								>
									<code>My Resume</code>
								</Typography>
							</Grid>
							<Grid item xs={6}>
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