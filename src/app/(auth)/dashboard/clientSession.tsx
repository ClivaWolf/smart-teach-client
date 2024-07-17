'use client'

import { useSession } from "next-auth/react";

function ClientSession() {
    const session = useSession()
    return ( 
        <div>
            <p>Client Session</p>
            <p>{JSON.stringify(session)}</p>
        </div>
     );
}

export default ClientSession;