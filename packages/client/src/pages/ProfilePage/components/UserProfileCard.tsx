import { Header, Grid } from 'semantic-ui-react'
import UserProfileImage from '../../../components/UserProfileImage'
import NameProfile from '../../../profile/NameProfile';

export default function UserProfileCard(props: any) {
    return (
        <>
            <Grid columns={2} stackable={true} secondary="true" position='left' inverted>
                <Grid.Column>
                    <UserProfileImage />
                </Grid.Column>
            </Grid>
            <Header as='h4' color='blue'>
                <NameProfile />
            </Header>
        </>
    )

}