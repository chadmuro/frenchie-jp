import React from 'react';
import { GridList, GridListTile, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { useFirestore } from '../../hooks/useFirestore';

const useStyles = makeStyles({
	gridList: {
		minHeight: '250px',
	},
});

const ImageGrid = () => {
	const classes = useStyles();
    const { docs } = useFirestore('images', 'createdAt');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<GridList cols={isMobile ? 2 : 4} spacing={10}>
			{docs &&
				docs.map((image) => (
					<GridListTile key={image.id} className={classes.gridList}>
						<img src={image.url} alt={image.name} />
					</GridListTile>
				))}
		</GridList>
	);
};

export default ImageGrid;
