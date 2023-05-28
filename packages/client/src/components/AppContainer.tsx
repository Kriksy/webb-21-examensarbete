import React from 'react'
import { Container, Segment, Header, SemanticICONS } from "semantic-ui-react"

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

interface AppContainerProps {
    header?: {
        title: string
        icon: string
    }
    children: React.ReactNode;
}

export function AppContainer({ header, children }: AppContainerProps) {
    return (
        <div>
            <Navbar />
            <Container style={{ padding: '8vh 0vh' }}>
                {
                    header &&
                    <Segment
                        color={"blue"}
                        attached='top'
                    >
                        <Header
                            as='h2'
                            icon={header.icon as SemanticICONS}
                            content={header.title}
                            textAlign='center'
                        />
                    </Segment>
                }
                {children}
            </Container>
            <Footer />
        </div>
    )
}
