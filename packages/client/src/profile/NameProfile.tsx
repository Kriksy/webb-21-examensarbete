import React from 'react'
import { AppContext } from '../context/appContext';

export default function NameProfile() {
    const appContext = React.useContext(AppContext)

    return (
        <div>
            {appContext.user.username}
        </div>
    )
}