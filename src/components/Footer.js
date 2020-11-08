import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography>Tokyo Frenchies &copy; 2020 Chad Murobayashi
            </Typography>
        </div>
    )
}

export default Footer;