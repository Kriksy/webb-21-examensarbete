import { Grid, Container, Segment, Header } from 'semantic-ui-react'
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
                        <Segment>
                            <Header as='h2' attached='top' className='text-align-center'>
                                Post av User
                            </Header>
                        </Segment>
                        <Segment>
                            USER POSTS
                            {/* <Post /> */}
                        </Segment>
            </AppContainer>
        </div>
    )
}
