import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../components/Home';

const useStyles = makeStyles((theme) => ({
	root: {
    flexGrow: 1,
	},
}));

const HomePage = (props) => {
  const classes = useStyles();
  return (
		<div className={classes.root}>
			<Home />
		</div>
	);
};

export default HomePage;