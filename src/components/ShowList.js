import React, { useState } from 'react';
import {
	Button,
	Card,
	CardActions,
	CardActionArea,
	CardHeader,
	CardMedia,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		fontSize: '100%',
	},
	media: {
		height: 0,
		paddingTop: '147.05%',
	},
}));

const noImageURL = 'https://via.placeholder.com/680x1000.png?text=No+Image';

const ShowList = ({ shows, addShow, removeShow, action, children }) => {
	const classes = useStyles();
	const [modal, setModal] = useState({ isOpen: false, show: null });

	const onClickHandler = (show) => {
		switch (action) {
			case 'ADD_SHOW':
				return addShow(show);
			case 'REMOVE_SHOW':
				return removeShow(show);
			default:
				return;
		}
	};

	return (
		<Grid container spacing={1}>
			{shows.map((show) => (
				<Grid item md={4} sm={6} xs={6} key={show.id}>
					<Card variant="outlined">
						<CardHeader
							title={
								<Typography variant="h5" noWrap>
									{show.seriesName}
								</Typography>
							}
						/>
						<CardActionArea onClick={() => setModal({ isOpen: true, show })}>
							<CardMedia
								className={classes.media}
								image={noImageURL}
								title={show.seriesName}
							/>
						</CardActionArea>
						<CardActions>
							<Button
								disableElevation
								onClick={() => onClickHandler(show)}
								variant="outlined"
							>
								{children}
							</Button>
						</CardActions>
					</Card>
					<Dialog
						open={modal.isOpen}
						onClose={() =>
							setModal({
								isOpen: false,
								show: null,
							})
						}
					>
						{modal.show && (
							<div>
								<DialogTitle>
									<Typography variant="h4">{modal.show.seriesName}</Typography>
								</DialogTitle>
								<DialogContent>
									<Typography className={classes.root}>
										{modal.show.overview}
									</Typography>
								</DialogContent>
								<DialogActions>
									<Button
										className={classes.root}
										onClick={() =>
											setModal({
												isOpen: false,
												show: null,
											})
										}
										color="primary"
									>
										CLOSE
									</Button>
								</DialogActions>
							</div>
						)}
					</Dialog>
				</Grid>
			))}
		</Grid>
	);
};

export default ShowList;
