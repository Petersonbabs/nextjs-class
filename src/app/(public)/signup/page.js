"use client";

import { useSession, signIn, signOut } from "next-auth/react";

// session: useSession, sessionProvider

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <p>Signed in as {session.user.email}</p>
                <img src={session.user.image} alt="Profile" width={40} height={40} />
                <br />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return (
        <div>
            <p>Not signed in</p>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
    );
}
