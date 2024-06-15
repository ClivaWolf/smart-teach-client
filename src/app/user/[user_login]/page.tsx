import UserPage from "@/pages/UserPage";

export default function User({params}: { params: { user_login: string } }) {
    return <UserPage params={params}/>
}