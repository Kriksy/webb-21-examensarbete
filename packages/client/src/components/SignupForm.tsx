import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormProps, Button, Segment, InputOnChangeData } from 'semantic-ui-react'
import { signUpUser } from "../shared"

export default function SignupForm() {
    const navigate = useNavigate()

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [errorMessage, setErrorMessage] = useState("")

    const handleChangeUsername = (e: React.SyntheticEvent, { name, value }: InputOnChangeData) => setUsername(value)
    const handleChangePassword = (e: React.SyntheticEvent, { name, value }: InputOnChangeData) => setPassword(value)

    function onSubmit(e: React.FormEvent<HTMLFormElement>, data: FormProps) {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };

        signUpUser({
            username: target.username.value,
            password: target.password.value
        }).then(({ message }) => {

        }).catch((error) => {
            console.log("Error:", error)
            // TODO
        })
    }

    const hasErrorMessage = errorMessage !== ""

    return (
        <Segment>
            <Form onSubmit={onSubmit} error={hasErrorMessage}>
                <Form.Input
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={handleChangeUsername}
                />
                <Form.Input
                    placeholder='Password'
                    name='Password'
                    value={password}
                    onChange={handleChangePassword}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Segment >
    )
}