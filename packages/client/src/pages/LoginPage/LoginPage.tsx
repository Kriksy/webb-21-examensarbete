import LoginForm from './components/LoginForm'
import { AppContainer } from "../../components/AppContainer"
import { Segment } from 'semantic-ui-react'

export default function LoginPage() {
    return (
        <div>
            <AppContainer header={{ title: "Login", icon: "sign in" }}>
                    <Segment attached>
                        <LoginForm />
                    </Segment>
            </AppContainer>
        </div>
    )
}

