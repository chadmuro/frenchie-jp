import React, { useState } from 'react';
import { Modal, Typography, Button, TextField, IconButton, Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { postFirestore } from '../../hooks/useFirestore';

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
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState('');
	const [url, setUrl] = useState('');
    const classes = useStyles();

    const formSubmit = (e) => {
        e.preventDefault();
        let eventObj = {
            name,
            date,
            time,
            description,
            location,
			url,
			joiners: 0,
			next: true
        }
        
		postFirestore('events', eventObj);
		setName('');
		setDate('');
		setTime('');
		setDescription('');
		setLocation('');
		setUrl('');
        setOpen(!open);
    }

	return (
		<Modal
			open={open}
			className={classes.modal}
			onClick={e => (e.target.ariaHidden ? setOpen(!open) : null)}
			closeAfterTransition
		>
			<Fade in={open}>
				<div className={classes.container}>
					<IconButton
						className={classes.closeButton}
						onClick={() => setOpen(!open)}
					>
						<CloseIcon />
					</IconButton>
					<Typography variant="h4">Create New Event</Typography>
					<form className={classes.form} onSubmit={formSubmit}>
						<TextField
							id="name"
							label="Event Name"
							variant="outlined"
							className={classes.input}
							value={name}
							onChange={e => setName(e.target.value)}
							fullWidth
							required
						/>
						<TextField
							id="date"
							label="Date"
							variant="outlined"
							className={classes.input}
							value={date}
							onChange={e => setDate(e.target.value)}
							required
						/>
						<TextField
							id="time"
							label="Time"
							variant="outlined"
							className={classes.input}
							value={time}
							onChange={e => setTime(e.target.value)}
							required
						/>
						<TextField
							id="description"
							label="Description"
							variant="outlined"
							className={classes.input}
							value={description}
							onChange={e => setDescription(e.target.value)}
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
							value={location}
							onChange={e => setLocation(e.target.value)}
							required
						/>
						<TextField
							id="url"
							label="Location URL"
							variant="outlined"
							className={classes.input}
							value={url}
							onChange={e => setUrl(e.target.value)}
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
