import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormProps, Button, Segment } from 'semantic-ui-react'
import { authenticateUser } from "../shared"

export default function LoginForm() {
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

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
                <Button type='submit'>Submit</Button>
            </Form>
        </Segment >
    )
}