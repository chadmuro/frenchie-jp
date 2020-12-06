import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthContextProvider = props => {
	const [isLoggedIn, setIsLoggedIn] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(user.uid);
				setLoading(false);
				console.log('logged in as ' + user.email);
			} else {
				setIsLoggedIn('');
				setLoading(false);
				console.log('not logged in');
			}
		});
	}, []);
    

    return (
        <AuthContext.Provider value={{isLoggedIn, loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
