import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormProps, Button, Segment, Grid, Message, Header, Image, Container, Divider } from 'semantic-ui-react'
// import { authenticateUser } from "../../../shared"
import { api } from "../../../api"
import { AppContext } from '../../../context/appContext'

export default function LoginForm() {
    const appContext = useContext(AppContext)

    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate();

    const [state] = useState({ activeItem: 'home' })

    const handleItemClick = (e: any, { name }: any) => (
        navigate("/" + name)
    )

    const { activeItem } = state
    function onSubmit(e: React.FormEvent<HTMLFormElement>, data: FormProps) {
        e.preventDefault()
        setErrorMessage("")

        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };
        api.authenticateUser({
            username: target.username.value,
            password: target.password.value
        }).then((res) => {
            appContext.login(res.data.token)
            navigate("/home")
        }).catch((error) => {
            setErrorMessage("Username or password is incorrect.\nPlease, try again!")
        })
    }

    const hasErrorMessage = errorMessage !== ""

    return (
        <Segment>
            <Form onSubmit={onSubmit} error={hasErrorMessage}>
                <Image src="../images/logo.png" size="small" centered outline="true" />

                <Form.Field>
                    <label>Username</label>
                    <input name="username" placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input name="password" placeholder='Password' />
                </Form.Field>
                <br />
                <Grid columns={2} divided={true} inverted>
                    <Grid.Row>
                        <Grid.Column className="text-align-center">
                            <Button
                                color='blue'
                                type='submit'> Log in
                            </Button>
                        </Grid.Column>
                        <Grid.Column className="text-align-center">
                            <Button
                                name='signup'
                                active={activeItem === 'signup'}
                                onClick={handleItemClick}> Sign up
                            </Button>
                        </Grid.Column>


                    </Grid.Row>
                </Grid>
                {
                        errorMessage &&
                        <Message
                            error
                            header='There was some errors when logging in...'
                            list={[errorMessage]}
                        />
                    }
            </Form>
        </Segment>
    )
}

