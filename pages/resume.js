import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../components/Resume';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2)
	},
}));

const ResumePage = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Resume />
		</div>
	);
};

export default ResumePage;