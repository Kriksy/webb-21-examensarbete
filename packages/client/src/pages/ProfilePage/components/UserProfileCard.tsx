import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Segment, Header, Label, Button, Icon, Grid } from 'semantic-ui-react'
import UserProfileImage from '../../../components/UserProfileImage'
import NameProfile from '../../../profile/NameProfile';

export default function UserProfileCard(props: any) {
    const navigate = useNavigate();

    const [state] = useState({ activeItem: 'home' })

    const handleItemClick = (e: any, { name }: any) => (
        navigate("/" + name)
    )

    const { activeItem } = state

    return (
        <>
            <Grid columns={2} stackable={true} secondary="true" position='left' inverted>
                <Grid.Column>
                    <UserProfileImage />
                </Grid.Column>
                <Grid.Column>
                    <Button basic color='grey' name='edit_profile'
                        active={activeItem === 'edit_profile'}
                        onClick={handleItemClick}>
                        <Icon disabled name='settings' color='grey' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Header as='h4' color='blue'>
                <NameProfile />
            </Header>
            <Segment>
                <h1>Favoriter</h1>
                <div>
                    <Label circular color='blue' >
                        post.label{/* {post.label} */}
                    </Label>
                </div>
            </Segment>
        </>
    )

}