import React from 'react'
import { Header, Icon, Container, Segment, Form, Input, TextArea, Button } from 'semantic-ui-react'
import { AppContainer } from "../components/AppContainer"

export default function LoginPage() {



    return (
        <>
            <AppContainer>
                <Container>
                    <Segment>
                        <div>
                            <Header as='h2' icon textAlign='center' >
                                <Icon name='users' circular />
                                <Header.Content>Support</Header.Content>
                            </Header>
                        </div>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='First name'
                                    placeholder='First name'
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Last name'
                                    placeholder='Last name'
                                />

                            </Form.Group>
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='What can we help you with?'
                                placeholder='What can we help to you with? Write here.'
                            />
                            <Form.Field
                                id='form-input-control-error-email'
                                control={Input}
                                label='Email'
                                placeholder='joe@schmoe.com'
                                error={{
                                    content: 'Please enter a valid email address',
                                    pointing: 'below',
                                }}
                            />
                            <Form.Field
                                id='form-button-control-public'
                                control={Button}
                                content='Send'
                                label='Label with htmlFor'
                            />
                        </Form>
                    </Segment>
                </Container>
            </AppContainer>
        </>
    )
}


