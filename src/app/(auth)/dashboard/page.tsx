import { getServerSession,  } from "next-auth";
// import { authConfig } from "@/configs/auth";
import ClientSession from "./clientSession";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Metadata } from "next";
import NavBar from "@/widgets/NavBar";

export const metadata: Metadata = {
    title: "Smart Teach | Dashboard"
  };

async function DashboardPage() {
    const session = await getServerSession(authOptions)
    // const profile = await get
    return ( 
        <div>
            <NavBar></NavBar>

            <p>Server Session</p>
            <p>{JSON.stringify(session)}</p>
            <ClientSession/>
        </div>
     );
}

export default DashboardPage;