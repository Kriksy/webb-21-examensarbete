import { Segment } from 'semantic-ui-react'

import SignupForm from './components/SignupForm'
import { AppContainer } from "../../components/AppContainer"


export default function SignUpPage() {

    return (
        <div>
            <AppContainer header={{ title: "Sign Up", icon: "signup" }}>
                    <Segment attached>
                        <SignupForm />
                    </Segment>
            </AppContainer>
        </div>
    )
}