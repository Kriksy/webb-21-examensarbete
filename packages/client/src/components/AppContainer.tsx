import React from 'react'
import { UserContextProvider } from '../context/userContext';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

interface AppContainerProps {
    children: React.ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
    return (
        <div>
            <UserContextProvider>
                <Navbar />
                {children}
                <Footer />
            </UserContextProvider>
        </div>
    )
}
