import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormProps, Button, Segment, Grid, Message, Header, Image } from 'semantic-ui-react'
import { authenticateUser } from "../../../shared"

export default function LoginForm() {
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate();

    const [state] = useState({ activeItem: 'home' })

    const handleItemClick = (e: any, { name }: any) => (
        navigate("/" + name)
    )

    const { activeItem } = state

    function onSubmit(e: React.FormEvent<HTMLFormElement>, data: FormProps) {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };

        authenticateUser({
            username: target.username.value,
            password: target.password.value
        }).then(({ token }) => {
            localStorage.setItem("user", token)
            navigate("/home")
        }).catch((error) => {
            console.log("Error:", error)
            setErrorMessage("Username or password is incorrect.\nPlease, try again!")
        })
    }

    const hasErrorMessage = errorMessage !== ""

    return (
        <Segment>
            <Form onSubmit={onSubmit} error={hasErrorMessage}>
                <Form.Field>
                    <label>Username</label>
                    <input name="username" placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input name="password" placeholder='Password' />
                </Form.Field>
                <Grid columns={2} divided inverted>
                    <Grid.Row>
                        <Grid.Column>
                            <Button
                                className="text-align-left"
                                type='submit'
                                name='create_user'
                                active={activeItem === 'create_user'}
                                onClick={handleItemClick}> Sign-in </Button>
                        </Grid.Column>
                        <Grid.Column className="text-align-right" >
                            <Button
                                color='blue'
                                type='submit'> Log-in
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </Segment >
    )
}

