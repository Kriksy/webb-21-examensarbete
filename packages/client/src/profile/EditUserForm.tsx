import React from 'react';
import { Card, Header, Grid, Button, Icon } from 'semantic-ui-react'
import { UserContext } from '../context/userContext';
import NameProfile from './NameProfile';

import UserProfileImage from '../components/UserProfileImage'

export default function EditUserForm(props: any) {

    return (
        <>
            <UserProfileImage />
            <Header as='h4' color='blue'>
                NAME
                <NameProfile />
            </Header>


            <Grid columns={2} stackable secondary position='left' inverted>
                <Grid.Column>



                </Grid.Column>
                <Grid.Column>
                    {/* 
                    <Button basic color='grey' name='edit_profile'
                        active={activeItem === 'edit_profile'}
                        onClick={handleItemClick}>
                        <Icon disabled name='settings' color='grey' />
                    </Button> */}

                </Grid.Column>
            </Grid>

        </>
    )
}


