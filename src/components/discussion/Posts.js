import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { useFirestore } from '../../hooks/useFirestore';

const Posts = () => {
	const { docs } = useFirestore('posts', 'createdAt');

	return (
		<Grid item xs={12}>
			{docs &&
				docs.map(post => {
					return (
						<Card key={post.id}>
							<CardContent>
								<Typography variant="h6">{post.title}</Typography>
								<Typography color="primary">{post.name}</Typography>
								<Typography variant="caption">
									{post.createdAt.toDate().toDateString()}
								</Typography>
								<Typography>{post.description}</Typography>
							</CardContent>
						</Card>
					);
				})}
		</Grid>
	);
};

export default Posts;
