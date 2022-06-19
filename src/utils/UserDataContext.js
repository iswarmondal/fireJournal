import React, { useState, createContext } from 'react';

export const UserDataContext = createContext()

export function UserContextProvider(props) {
    const [userData, setUserData] = useState(null)

    return (
        <UserDataContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserDataContext.Provider>
    )
}