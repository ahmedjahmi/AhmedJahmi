import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeAfterLoad from '../components/HomeAfterLoad';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const HomePage = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<HomeAfterLoad />
		</div>
	);
};

export default HomePage;
