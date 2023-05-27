import React from 'react';
import { Image } from 'semantic-ui-react'
import { AppContext, useAppContext } from '../context/appContext';

export default function UserProfileImage() {
    const {user} = useAppContext()
    return (
        <Image  circular color="green"
        src={`../images/profile_icon/${user.avatar}.jpg`} />
    )
}
