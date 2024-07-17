import { getServerSession,  } from "next-auth";
// import { authConfig } from "@/configs/auth";
import ClientSession from "./clientSession";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function DashboardPage() {
    const session = await getServerSession(authOptions)
    // const profile = await get
    return ( 
        <div>DashboardPage

            <p>Server Session</p>
            <p>{JSON.stringify(session)}</p>
            <ClientSession/>
        </div>
     );
}

export default DashboardPage;