import React, { useState } from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles({
	button: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '2rem',
    },
    text: {
        marginTop: '.5rem',
        width: '100%',
        textAlign: 'center'
    }
});

const UploadForm = () => {
    const classes = useStyles();
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ['image/png', 'image/jpeg'];

	const changeHandler = (e) => {
		let selected = e.target.files[0];
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('Please select an image file (png or jpeg)');
		}
	};

	return (
		<form className={classes.button}>
			<label htmlFor="upload-photo">
				<input type="file" onChange={changeHandler} style={{ display: 'none '}} name="upload-photo" id="upload-photo" />
                <Fab size="medium" color="primary" component="span" aria-lable="add">
                    <AddIcon />
                </Fab>
			</label>

			<div className={classes.text}>
				{error && <div>{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadForm;