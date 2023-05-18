import React from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

interface AppContainerProps {
    children: React.ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}



