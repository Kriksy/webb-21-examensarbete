import React from 'react'
import { Header, Container, Segment, Card, Icon, Image } from 'semantic-ui-react'


import UserProfileImage from '../components/UserProfileImage'
import { AppContainer } from "../components/AppContainer"


export default function DevelopersPage() {
    return (
        <>
            <AppContainer>
                <Container>
                    <Segment>
                        <div>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='users' circular />
                                <Header.Content>Developers</Header.Content>
                            </Header>
                        </div>
                        <Card.Group>
                            <Card>
                                <Image src='../images/developers/d_viktoria.jpg' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Viktoria</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2023</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Viktoria is a fullstack developer living in Stockholm.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon icon='email' />
                                        viktoria.toldi@gmail.com
                                    </a>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Image src='../images/profile_icon/2.jpg' wrapped ui={false}><UserProfileImage /></Image>

                                <Card.Content>
                                    <Card.Header>Du</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in ?</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Den kan bli du.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon icon='email' />
                                        din.emailadress@gmail.com
                                    </a>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                </Container>
            </AppContainer>
        </>
    )
}