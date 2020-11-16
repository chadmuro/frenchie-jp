import React, { createContext, useState } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    auth.onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(true);
				console.log('logged in as ' + user.email);
			} else {
				setIsLoggedIn(false);
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