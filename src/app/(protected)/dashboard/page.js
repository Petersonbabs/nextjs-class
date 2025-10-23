"use client"
import React from 'react'
import { useSession, signOut } from "next-auth/react"

const Dasbhaord = () => {
    const { data: session } = useSession()
    console.log(session)
    return (
        <div>
            <h1>Hello, {session?.user?.name}</h1>

            <button onClick={signOut}>Logout </button>
        </div>
    )
}

export default Dasbhaord