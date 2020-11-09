import React from 'react';
import { Modal, Typography, Button, TextField, IconButton, Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { postFirestoreEvent } from '../../hooks/useFirestore';

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    container: {
        backgroundColor: '#fff',
        outline: 'none',
        maxHeight: '1000px',
        maxWidth: '500px',
        textAlign: 'center',
        padding: '1rem',
        paddingTop: '3rem',
        position: 'relative',
    },
    form: {
        padding: '1rem'
    },
    input: {
        margin: '.5rem',
    },
    button: {
        marginTop: '1rem'
    }
})

const NewEventModal = ({ open, setOpen }) => {
    const classes = useStyles();

    const formSubmit = (e) => {
        e.preventDefault();
        let eventObj = {
            name: e.target.elements.name.value,
            date: e.target.elements.date.value,
            time: e.target.elements.time.value,
            description: e.target.elements.description.value,
            location: e.target.elements.location.value,
            url: e.target.elements.url.value,
        }
        
        postFirestoreEvent('events', eventObj);
        setOpen(!open);
    }

	return (
		<Modal
			open={open}
			className={classes.modal}
			onClick={(e) => (e.target.ariaHidden ? setOpen(!open) : null)}
			closeAfterTransition
		>
			<Fade in={open}>
				<div className={classes.container}>
					<IconButton
						className={classes.closeButton}
						onClick={(e) => (e.target.ariaHidden ? setOpen(!open) : null)}
					>
						<CloseIcon />
					</IconButton>
					<Typography variant="h4">Create New Event</Typography>
					<form component="form" className={classes.form} onSubmit={formSubmit}>
						<TextField
							id="name"
							label="Event Name"
							variant="outlined"
							className={classes.input}
							fullWidth
							required
						/>
						<TextField
							id="date"
							label="Date"
							variant="outlined"
							className={classes.input}
							required
						/>
						<TextField
							id="time"
							label="Time"
							variant="outlined"
							className={classes.input}
							required
						/>
						<TextField
							id="description"
							label="Description"
							variant="outlined"
							className={classes.input}
							multiline
							rows={3}
							fullWidth
							required
						/>
						<TextField
							id="location"
							label="Location"
							variant="outlined"
							className={classes.input}
							required
						/>
						<TextField
							id="url"
							label="Location URL"
							variant="outlined"
							className={classes.input}
							required
						/>
						<Button
							variant="contained"
							color="secondary"
							type="submit"
							className={classes.button}
						>
							Submit
						</Button>
					</form>
				</div>
			</Fade>
		</Modal>
	);
};

export default NewEventModal;
