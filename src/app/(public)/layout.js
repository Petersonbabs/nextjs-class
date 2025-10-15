import NavBar from '@/components/UI/NavBar'
import React from 'react'

const Publiclayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default Publiclayout