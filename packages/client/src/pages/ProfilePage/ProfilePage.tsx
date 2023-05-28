import { Grid, Container, Segment } from 'semantic-ui-react'
import { AppContainer } from "../../components/AppContainer"

import UserProfileCard from './components/UserProfileCard'
import CreatePost from './components/CreatePost'

export default function UserPage() {
    return (
        <div>
            <AppContainer header={{ title: "Profile", icon: "user circle" }}>
                <Segment attached>
                    <Grid celled stackable columns={2}>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <UserProfileCard />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Container>
                                    <CreatePost />
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </AppContainer>
        </div>
    )
}
