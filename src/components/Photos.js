import React from 'react';
import { Container, GridList, GridListTile, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	title: {
		paddingTop: '5rem'
	},
	main: {
		flexGrow: '1'
	},
	month: {
		paddingTop: '3rem'
	}
}));

const imageData = [
	{
		img:
			'https://images.unsplash.com/photo-1554300668-50f3521dc276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1581131131269-5ccc5e08f692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1602658672216-f59a9f6222f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1543824515-3840d59d1099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1554300668-50f3521dc276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1581131131269-5ccc5e08f692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1602658672216-f59a9f6222f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1543824515-3840d59d1099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
	{
		img:
			'https://images.unsplash.com/photo-1554300668-50f3521dc276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		title: 'Frenchie Meetup',
	},
];

const Photos = () => {
	const classes = useStyles();

	return (
		<Container className={classes.main} maxWidth="md">
			<Typography variant="h3" align="center" className={classes.title}>
				Photo Gallery
			</Typography>
			<Typography variant="h6" className={classes.month}>
				December 2020
			</Typography>
			<GridList cols={3}>
				{imageData.map((image) => (
					<GridListTile key={image.img} cols={1}>
						<img src={image.img} alt={image.title}/>
					</GridListTile>
				))}
			</GridList>
		</Container>
	);
};

export default Photos;
