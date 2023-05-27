import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormProps, Button, Segment, InputOnChangeData, Divider, Label, Message } from 'semantic-ui-react'
import { signUpUser } from '../../../api'

export default function SignUpForm() {

    const navigate = useNavigate()

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>, { name, value }: InputOnChangeData) => setUsername(value)
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>, { name, value }: InputOnChangeData) => setPassword(value)

    function onSubmit(e: React.FormEvent<HTMLFormElement>, data: FormProps) {
        e.preventDefault()
        
        if (username === "") {
            setErrorMessage("username cannot be empty")
            return 
        }
        if (password === "") {
            setErrorMessage("password cannot be empty")
            return 
        }
    
        setErrorMessage("")
        signUpUser({
            username: username,
            password: password,
        }).then(({ message }) => {
            navigate("/login")
        }).catch((error) => {
            setErrorMessage(error!.message)
        })
    }

    const hasErrorMessage = errorMessage !== ""

    return (
        <>
            <Segment>
                <Form onSubmit={onSubmit} error={hasErrorMessage}>
                    <Form.Field>

                        <Form.Input
                            label="Username"
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={handleChangeUsername}
                        />
                    </Form.Field>

                    <Form.Field>

                        <Form.Input
                            label="Password"
                            type="password"
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={handleChangePassword}
                        />
                    </Form.Field>
                    <Button type='submit' color='green'>Submit</Button>
                    {
                        errorMessage &&
                        <Message
                            error
                            header='There was some errors with your submission'
                            list={[errorMessage]}
                        />
                    }
                </Form>
            </Segment>

        </>
    )
}
