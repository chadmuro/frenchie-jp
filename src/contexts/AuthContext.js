import React, { createContext, useState } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthContextProvider = props => {
	const [isLoggedIn, setIsLoggedIn] = useState('');

    auth.onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(user.uid);
				console.log(user.uid);
				console.log('logged in as ' + user.email);
			} else {
				setIsLoggedIn('');
				console.log('not logged in');
			}
		});

    return (
        <AuthContext.Provider value={{isLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
