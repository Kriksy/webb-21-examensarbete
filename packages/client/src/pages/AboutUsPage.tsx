import React from 'react'
import { Container, Segment, Header, Icon, Grid, Image } from 'semantic-ui-react'

import { AppContainer } from "../components/AppContainer"

export default function AboutUsPage() {

    return (
        <>
            <AppContainer>
                <Container>
                    <Segment >
                        <Header as='h2' icon textAlign='center'>
                            <Icon name='users' circular />
                            <Header.Content>About Us</Header.Content>
                        </Header>
                        <Grid celled stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Image src='../images/about_us/a_1.jpg' />
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    Cough furball poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree or claws in your leg so lie in the sink all day, for proudly present butt to human yet wack the mini furry mouse. do not try to mix old food with new one to fool me! scratch at the door then walk away bleghbleghvomit my furball really tie the room together.
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Image src='../images/about_us/a_3.jpg' />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    Ears back wide eyed weigh eight pounds but take up a full-size bed, yet sleep in the bathroom sink and meowing non stop for food. Sit on human humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean cat playing a fiddle in hey diddle diddle? or as lick i the shoes. Destroy the blinds ignore the squirrels, you'll never catch them anyway for meowing non stop for food, purr purr purr until owner pets why owner not pet me hiss scratch meow so make muffins chase mice, for human give me attention meow. Pee in human's bed until he cleans the litter box. Run up and down stairs make it to the carpet before i vomit mmmmmm so chew iPad power cord, yet annoy the old grumpy cat, start a fight and then retreat to wash when i lose play riveting piece on synthesizer keyboard or dont wait for the storm to pass, dance in the rain or cat cat moo moo lick ears lick paws. Be superior refuse to leave cardboard box while happily ignoring when being called jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed, poop in litter box, scratch the walls but only use one corner of the litter box. Cat not kitten around stare out the window or hit you unexpectedly.
                                    <Image circular size='small' src='../images/about_us/a_5.jpg' />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Image src='../images/about_us/a_4.jpg' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment>
                </Container>
            </AppContainer>
        </>
    )
}