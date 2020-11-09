import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core';
import useStorage from '../../hooks/useStorage';

const useStyles = makeStyles((theme) => ({
	progressBar: {
		height: '5px',
		marginTop: '20px',
		background: theme.palette.primary.main,
	},
}));

const ProgressBar = ({ file, setFile }) => {
	const classes = useStyles();
	const { url, progress } = useStorage(file);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<motion.div
			className={classes.progressBar}
			initial={{ width: 0 }}
			animate={{ width: progress + '%' }}
		></motion.div>
	);
};

export default ProgressBar;
