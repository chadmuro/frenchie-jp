import React, { useContext } from 'react';
import {
	GridList,
	GridListTile,
	useMediaQuery,
	useTheme,
	GridListTileBar,
	IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
	useFirestore,
	GetUserInfo,
	likePhotoFirestore,
	unlikePhotoFirestore,
} from '../../hooks/useFirestore';
import { AuthContext } from '../../contexts/AuthContext';

const useStyles = makeStyles({
	gridList: {
		minHeight: '250px',
		marginTop: '20px',
	},
	titleBar: {
		background:
			'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	icon: {
		color: 'white',
	},
	iconLiked: {
		color: '#ff0000',
	},
});

const ImageGrid = () => {
	const classes = useStyles();
	const { docs } = useFirestore('images', 'likes');
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const { isLoggedIn } = useContext(AuthContext);
	const userInfo = GetUserInfo(isLoggedIn);
	const { likedPhotos } = userInfo;

	return (
		<GridList cols={isMobile ? 2 : 4} spacing={10}>
			{docs &&
				docs.map(image => (
					<GridListTile
						key={image.id}
						id={image.id}
						className={classes.gridList}
					>
						<img src={image.url} alt={image.name} />
						{isLoggedIn ? (
							likedPhotos && likedPhotos.includes(image.id) ? (
								<GridListTileBar
									titlePosition="top"
									actionIcon={
										<IconButton
											className={classes.iconLiked}
											onClick={() => unlikePhotoFirestore(isLoggedIn, image.id)}
										>
											<FavoriteIcon />
										</IconButton>
									}
									actionPosition="left"
									className={classes.titleBar}
								/>
							) : (
								<GridListTileBar
									titlePosition="top"
									actionIcon={
										<IconButton
											className={classes.icon}
											onClick={() => likePhotoFirestore(isLoggedIn, image.id)}
										>
											<FavoriteIcon />
										</IconButton>
									}
									actionPosition="left"
									className={classes.titleBar}
								/>
							)
						) : (
							''
						)}
					</GridListTile>
				))}
		</GridList>
	);
};

export default ImageGrid;
